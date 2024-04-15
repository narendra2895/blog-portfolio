import Link from 'next/link';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/api/blogs');
  const blogs = await res.json();

  // Pass blog posts to the page via props
  return { props: { blogs } };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day}-${month}-${year}`;
}

const Blog = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category === selectedCategory);
      setFilteredBlogs(filtered);
    }
  }, [selectedCategory, blogs]);

  const Tab = ({ title, onClick, isActive }) => {
    return (
      <button
        onClick={onClick}
        className={`mr-4 py-2 px-4 ${isActive ? 'text-white border-b-2 border-blue-600' : 'text-gray-600'}`}
      >
        {title}
      </button>
    );
  };


  return (




    <div className="container pt-52 mx-auto">
      <h1 className='h1'>Blogs</h1>
      <div className="flex border-b overflow-scroll custom-scroll">
        <Tab title="All" onClick={() => setSelectedCategory('All')} isActive={selectedCategory === 'All'} />
        <Tab title="AWS" onClick={() => setSelectedCategory('AWS')} isActive={selectedCategory === 'AWS'} />
        <Tab title="Security Protocols" onClick={() => setSelectedCategory('Security Protocols')} isActive={selectedCategory === 'Security Protocols'} />
        <Tab title="Web Development" onClick={() => setSelectedCategory('Web Development')} isActive={selectedCategory === 'Web Development'} />
      </div>
      <ul className='flex flex-row flex-wrap overflow-x-scroll p-4 custom-scroll' style={{ maxHeight: '50vh' }}>
        {filteredBlogs.map((blog) => (
          <li className='w-64 h-48 mr-4 mb-4  shadow rounded overflow-hidden' key={blog._id}>
            <Link href={`/blogs/${blog._id}`}>
              <div className="block h-full p-3">
                <span className="text-lg font-semibold">{blog.title}</span>
                <p>{formatDate(blog.publishedDate)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`mr-4 py-2 px-4 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
    >
      {title}
    </button>
  );
};

export default Blog;
