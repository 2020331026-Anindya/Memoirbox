const mongoose = require('mongoose');

const TimelineCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TimelineCard', TimelineCardSchema); 