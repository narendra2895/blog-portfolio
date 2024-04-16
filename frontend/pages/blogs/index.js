import Link from 'next/link';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/api/blogs');
  const blogs = await res.json();

   // Sorting blogs by publishedDate in descending order
   blogs.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  return { props: { blogs } };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}

const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`mr-4 py-2 px-4 cursor-pointer whitespace-nowrap ${isActive ? 'text-white border-b-2 border-blue-600' : 'text-gray-600'}`}
    >
      {title}
    </button>
  );
};

const Blog = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  // Extract unique categories from blogs
  const categories = ['All', ...new Set(blogs.map(blog => blog.category).filter(Boolean))];

  return (
    <div className="container lg:pt-48 pt-40 mx-auto">
      <h1 className='h1'>Blogs</h1>
      <div className="flex border-b overflow-x-auto">
        {categories.map(category => (
          <Tab
            key={category}
            title={category}
            onClick={() => setSelectedCategory(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </div>
      <ul className='flex flex-row flex-wrap overflow-x-auto p-4' style={{ maxHeight: '50vh' }}>
        {filteredBlogs.map(blog => (
          <li className='w-64 h-48 mr-4 mb-4 bg-secondary shadow rounded overflow-hidden' key={blog._id}>
            <Link href={`/blogs/${blog._id}`}>
              <span className="block h-full p-3">
                <span className="text-lg font-semibold">{blog.title}</span>
                <p>{formatDate(blog.publishedDate)}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
