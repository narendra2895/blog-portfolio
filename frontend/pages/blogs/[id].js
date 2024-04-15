// pages/blog/[id].js
import Link from 'next/link';

// Function to fetch individual blog post data
async function fetchBlogData(id) {
  const res = await fetch(`http://localhost:3001/api/blogs/${id}`);
  const blog = await res.json();
  return blog;
}

export async function getServerSideProps(context) {
  // Extract the ID from the query
  const { id } = context.params;

  // Fetch the individual blog data
  const blog = await fetchBlogData(id);

  // Pass the blog post to the page via props
  return { props: { blog } };
}

// Formatting date just like in the blog listing page
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}

// Blog post component
const BlogPost = ({ blog }) => {
  return (
    <div className="container pt-52 mx-auto">
      <div >
        <h1>{blog.title}</h1>
        <p>{formatDate(blog.publishedDate)}</p>
        <div className="overflow-auto pb-12" style={{ maxHeight: 'calc(60vh - 3rem)' }}>
          {/* Assuming the blog content is stored in `blog.content` */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>          </div>
        {/* Link back to the blog listing page */}
        <Link href="/blogs">
          <span className="text-blue-500 hover:underline cursor-pointer">Back to blog list</span>
        </Link>
      </div>
    </div>
  );
};


export default BlogPost;
