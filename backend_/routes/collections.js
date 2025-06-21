const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Collection = require('../models/Collection');
const Memory = require('../models/Memory');

// Get all collections for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const collections = await Collection.find({ user: req.user._id })
      .sort({ lastUpdated: -1 });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new collection
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, images, privacy } = req.body;
    
    const collection = new Collection({
      name,
      description,
      images,
      privacy,
      user: req.user._id
    });

    await collection.save();
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific collection
router.get('/:id', auth, async (req, res) => {
  try {
    const collection = await Collection.findOne({
      _id: req.params.id,
      user: req.user._id
    });
    
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    
    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a collection
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, description, images, privacy } = req.body;
    
    const collection = await Collection.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { 
        name, 
        description, 
        images, 
        privacy,
        lastUpdated: Date.now()
      },
      { new: true }
    );
    
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    
    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a collection
router.delete('/:id', auth, async (req, res) => {
  try {
    const collection = await Collection.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    
    res.json({ message: 'Collection deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add memory to collection
router.post('/:id/memories', auth, async (req, res) => {
  try {
    const { memoryId } = req.body;
    const collection = await Collection.findOne({
      _id: req.params.id,
      user: req.user._id
    });
    
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    
    const memory = await Memory.findById(memoryId);
    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }
    
    if (!collection.memories.includes(memoryId)) {
      collection.memories.push(memoryId);
      await collection.save();
    }
    
    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove memory from collection
router.delete('/:id/memories/:memoryId', auth, async (req, res) => {
  try {
    const collection = await Collection.findOne({
      _id: req.params.id,
      user: req.user._id
    });
    
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    
    collection.memories = collection.memories.filter(
      memoryId => memoryId.toString() !== req.params.memoryId
    );
    
    await collection.save();
    res.json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 