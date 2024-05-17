import Link from 'next/link';
import Head from 'next/head'; // Import the Head component

// Function to fetch individual blog post data
export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const res = await fetch(`http://localhost:3001/api/blogs/${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const blog = await res.json();
    return { props: { blog } };
  } catch (error) {
    console.error('Failed to fetch blog:', error);
    return { props: { blog: null, error: "Blog not found or error fetching blog." } };
  }
}

// Blog post component
const BlogPost = ({ blog }) => {
  return (
    <div className="lg:p-40 p-10  h-screen overflow-scroll custom-scroll lg:pt-52 pt-20 mx-auto pb-64">
      <Head>
        <title>{blog ? blog.title : "Blog Post"}</title>
        <meta name="description" content={blog ? blog.summary : "Blog post content"} />
        <meta property="og:title" content={blog ? blog.title : "Blog Post"} />
        <meta property="og:description" content={blog ? blog.summary : "Blog post content"} />
        <meta property="og:image" content={blog ? blog.image : "/default-image.jpg"} />
        <meta property="og:type" content="article" />
      </Head>

      <h1 className="blog-h1 ">{blog.title}</h1>
      <div className="flex flex-col  ">
        {/* Image section */}
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="max-h-80 w-full object-contain mx-auto" />
        )}

        {/* Blog content section */}
        <div className="w-full mt-4" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
      {/* Back to blog list link */}

      <Link href="/blogs" className=''>
        <span className="relative top-8 bg-white p-3 rounded text-accent hover:underline cursor-pointer">Back to blog list</span>
      </Link>
    </div>
  );
};

export default BlogPost;
