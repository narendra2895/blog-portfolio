const mongoose = require('mongoose');
const slugify = require('slugify'); // Ensure slugify is installed and imported

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true }, // Ensure this line is here to enforce unique slugs
  image: String,
  category: String,
  publishedDate: { type: Date, default: Date.now },
  readingTime: String,
  content: { type: String, required: true },
  tags: [String],
}, { timestamps: true });

// Middleware to automatically create a slug before saving
blogSchema.pre('save', function(next) {
  console.log('Current title:', this.title); // Check the incoming title
  if (this.isNew || this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
    console.log('Generated slug:', this.slug); // Confirm slug generation
  } else {
    console.log('Slug generation skipped as title was not modified.');
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

// Optionally, you might have a function to update all slugs, commented out if not in use
// async function updateSlugs() {
//   const blogs = await Blog.find();
//   blogs.forEach(async (blog) => {
//     blog.slug = slugify(blog.title, { lower: true, strict: true });
//     await blog.save();
//   });
//   console.log('Slugs updated for all blogs');
// }
