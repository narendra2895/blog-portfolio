// pages/blog/index.js
import Link from 'next/link';

const Blog = () => {
  const blogs = [
    { id: 1, title: 'Blog Post 1', summary: 'This is a summary of the first blog post.' },
    { id: 2, title: 'Blog Post 2', summary: 'This is a summary of the second blog post.' },
    // Add your blog posts here
  ];

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {/* Updated Link usage */}
            <Link href={`/blog/${blog.id}`} passHref>
              <span style={{cursor: 'pointer'}}>{blog.title}</span>
            </Link>
            <p>{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
