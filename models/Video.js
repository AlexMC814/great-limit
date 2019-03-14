const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
  },
});

VideoSchema.index({
  '$**': 'text',
});

module.exports = mongoose.model('Video', VideoSchema);
