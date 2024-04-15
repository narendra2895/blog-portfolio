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
    <div className="container lg:pt-52 pt-40 mx-auto">
      <h1 className="blog-h1">{blog.title}</h1>
      <p>{formatDate(blog.publishedDate)}</p>

      <div className="flex flex-col  overflow-y-scroll custom-scroll pb-12 max-h-custom-xs lg:max-h-custom-lg">
        {/* Image section */}
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="max-h-80 w-full object-contain mx-auto" />
        )}

        {/* Blog content section */}
        <div className="w-full mt-4" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>

      {/* Back to blog list link */}
      <Link href="/blogs">
        <span className="relative top-8 bg-white p-3 rounded text-accent hover:underline cursor-pointer">Back to blog list</span>
      </Link>
    </div>
  );
};

export default BlogPost;
