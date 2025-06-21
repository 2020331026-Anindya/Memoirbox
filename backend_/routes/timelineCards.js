const express = require('express');
const router = express.Router();
const TimelineCard = require('../models/TimelineCard');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const cloudinary = require('../config/cloudinary');

// POST /api/timeline-cards/upload - upload image and return URL
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'timelinecards',
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

// POST /api/timeline-cards - create a new timeline card with metadata and imageUrl
router.post('/', async (req, res) => {
  try {
    const { title, date, type, description, imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: 'Image URL is required' });
    }
    const card = await TimelineCard.create({ title, date, type, description, imageUrl });
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/timeline-cards - fetch all timeline cards
router.get('/', async (req, res) => {
  try {
    const cards = await TimelineCard.find().sort({ date: 1 });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 