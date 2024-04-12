import { useState } from 'react';
import dynamic from 'next/dynamic'; // Import for dynamic component loading
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamically import ReactQuill with no server-side rendering
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p> // Optional loading component
});

export default function Form2895() {
  // Define the initial state outside of the component so it can be reused for resetting
  const initialFormData = {
    title: '',
    image: '',
    category: '',
    publishedDate: '',
    readingTime: '',
    content: '',
    tags: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Special handler for ReactQuill due to its value coming directly as a parameter
  const handleContentChange = (content) => {
    setFormData((prevState) => ({
      ...prevState,
      content: content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map(tag => tag.trim());
    
    // Ensure the publishedDate is in ISO format (YYYY-MM-DD) or use any logic to validate/transform
    let publishedDateISO = formData.publishedDate;
    if (formData.publishedDate && !formData.publishedDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      console.error("Invalid date format. Please use YYYY-MM-DD.");
      return; // Prevent form submission
    }

    const dataToSend = { ...formData, tags: tagsArray, publishedDate: publishedDateISO };
  
    try {
      const response = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        const errorBody = await response.text(); // Or response.json() if your server sends JSON responses for errors
        console.error(`Failed to submit blog post: HTTP ${response.status} - ${errorBody}`);
        throw new Error(`Network response was not ok: HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log('Blog post submitted successfully:', result);
      // Reset form data to initial state after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error('Failed to submit blog post:', error);
      // Handle errors
    }
  };

  return (
    <div className="container pt-52 mx-auto">
      <form onSubmit={handleSubmit} className='bg-secondary text-black flex flex-col p-12'>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          placeholder="Published Date"
          required
        />
        <input
          name="readingTime"
          value={formData.readingTime}
          onChange={handleChange}
          placeholder="Reading Time"
          required
        />
        <ReactQuill
          className="bg-white border-black overflow-auto pb-12" style={{ maxHeight: 'calc(30vh - 3rem)' }}
          value={formData.content}
          onChange={handleContentChange} // Use the special handler for content
          placeholder="Content"
          required
        />
        <input 
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          required
        />
        <button className='bg-white text-black' type="submit">Submit</button>
      </form>
    </div>
  );
}
