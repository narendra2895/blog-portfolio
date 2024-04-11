// pages/blog/index.js
import Link from 'next/link';

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3001/api/blogs');
  const blogs = await res.json();

  // Pass blog posts to the page via props
  return { props: { blogs } };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // getMonth() returns month from 0-11. Adding 1 to get 1-12
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ensures two digits
  const day = ('0' + date.getDate()).slice(-2); // Ensures two digits

  return `${day}-${month}-${year}`;
}

const Blog = ({ blogs }) => {
  return (
    <div className="container pt-52 mx-auto">
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li className='py-3 overflow-y-auto' key={blog._id}>
            {/* Update Link usage here */}
            <Link href={`/blogs/${blog._id}`}>
              <span className="text-lg font-semibold cursor-pointer">{blog.title}</span>
            </Link>
            <p>{formatDate(blog.publishedDate)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
