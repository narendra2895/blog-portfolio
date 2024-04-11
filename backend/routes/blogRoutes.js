const express = require('express');
const Blog = require('../models/blogs');

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Get a single blog by id
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a new blog
// Assuming this is in blogRoutes.js
router.post('/', async (req, res) => {
    const newBlog = new Blog(req.body);
    try {
      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

// Update a blog
router.put('/:id', async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBlog);
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
