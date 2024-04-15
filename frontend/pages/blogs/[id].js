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
      <div >
        <h1 className='h1'>{blog.title}</h1>
        <p>{formatDate(blog.publishedDate)}</p>
        <div className="overflow-auto custom-scroll pb-12 max-h-custom-xs lg:max-h-custom-lg" >
          {/* Assuming the blog content is stored in `blog.content` */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
        {/* Link back to the blog listing page */}
        <Link className='relative top-8' href="/blogs" >
          <span className="bg-white p-3 rounded text-accent  hover:underline cursor-pointer">Back to blog list</span>
        </Link>
      </div>

    </div>
  );
};


export default BlogPost;
