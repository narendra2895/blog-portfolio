const mongoose = require('mongoose');
const slugify = require('slugify'); // Ensure slugify is installed and imported



const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true }, // Add this line
  image: String,
  category: String,
  publishedDate: { type: Date, default: Date.now },
  readingTime: String,
  content: { type: String, required: true },
  tags: [String],
}, { timestamps: true });

// Middleware to automatically create a slug before saving
blogSchema.pre('save', function(next) {
  if (!this.isModified('title')) return next();
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

async function updateSlugs() {
  const blogs = await Blog.find();
  blogs.forEach(async (blog) => {
    blog.slug = slugify(blog.title, { lower: true, strict: true });
    await blog.save();
  });
}

updateSlugs().then(() => console.log('Slugs updated for all blogs'));