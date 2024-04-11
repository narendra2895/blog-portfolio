const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  category: String,
  publishedDate: { type: Date, default: Date.now },
  readingTime: String,
  content: { type: String, required: true },
  tags: [String],
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
