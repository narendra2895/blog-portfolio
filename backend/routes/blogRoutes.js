const express = require('express');
const Blog = require('../models/blogs');

const router = express.Router();



// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Get a single blog by slug
// Express Router: Finding a blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
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
  console.log('Received data:', req.body);
  const newBlog = new Blog(req.body);
  try {
    await newBlog.save();
    res.status(201).send(newBlog);
  } catch (error) {
    console.error('Error saving blog:', error);
    res.status(400).json({ error: error.message });
  }
});



// Update a blog
// Update a blog by slug
router.put('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    Object.keys(req.body).forEach(key => {
      blog[key] = req.body[key];
    });

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a blog by slug
router.delete('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
