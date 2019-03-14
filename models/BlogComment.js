const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogCommentSchema = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('BlogComment', BlogCommentSchema);
