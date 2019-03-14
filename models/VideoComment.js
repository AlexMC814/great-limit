const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoCommentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  video: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('VideoComment', VideoCommentSchema);
