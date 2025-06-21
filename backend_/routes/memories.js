const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Memory = require('../models/Memory');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Get all memories for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const { startDate, endDate, tags } = req.query;
    const query = { user: req.user._id };

    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (tags) {
      query.tags = { $in: tags.split(',') };
    }

    const memories = await Memory.find(query)
      .sort({ date: -1 })
      .populate('user', 'name');
    res.json(memories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload file to Cloudinary
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'memoirbox',
      resource_type: 'auto'
    });

    res.json({
      secure_url: result.secure_url,
      public_id: result.public_id
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: error.message || 'Error uploading file' });
  }
});

// Create a new memory
router.post('/', auth, async (req, res) => {
  try {
    const memory = new Memory({
      ...req.body,
      user: req.user._id
    });
    await memory.save();
    res.status(201).json(memory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get public memories
router.get('/public', async (req, res) => {
  try {
    const memories = await Memory.find({ visibility: 'public' })
      .populate('user', 'name')
      .select('title description date imageUrls tags user createdAt')
      .sort({ createdAt: -1 });
    res.json(memories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single memory
router.get('/:id', auth, async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id)
      .populate('user', 'name');
    if (!memory) {
      return res.status(404).json({ message: 'Memory not found' });
    }
    res.json(memory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a memory
router.put('/:id', auth, async (req, res) => {
  try {
    const memory = await Memory.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!memory) {
      return res.status(404).json({ message: 'Memory not found' });
    }

    Object.assign(memory, req.body);
    await memory.save();
    res.json(memory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a memory
router.delete('/:id', auth, async (req, res) => {
  try {
    const memory = await Memory.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!memory) {
      return res.status(404).json({ message: 'Memory not found' });
    }

    await memory.deleteOne();
    res.json({ message: 'Memory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Like/Unlike a memory
router.post('/:id/like', auth, async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);
    
    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }

    const likeIndex = memory.likes.indexOf(req.user._id);
    
    if (likeIndex === -1) {
      // Like the memory
      memory.likes.push(req.user._id);
    } else {
      // Unlike the memory
      memory.likes.splice(likeIndex, 1);
    }

    await memory.save();
    res.json(memory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add a comment to a memory
router.post('/:id/comments', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const memory = await Memory.findById(req.params.id);
    
    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }

    memory.comments.push({
      user: req.user._id,
      text
    });

    await memory.save();
    
    const populatedMemory = await Memory.findById(memory._id)
      .populate('user', 'name email')
      .populate('comments.user', 'name email');
    
    res.json(populatedMemory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 