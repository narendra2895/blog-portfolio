import { useState } from 'react';
import Link from 'next/link';

export default function Form2895() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    publishedDate: '',
    readingTime: '',
    content: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map(tag => tag.trim());
    const dataToSend = { ...formData, tags: tagsArray };
  
    try {
      const response = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        const errorBody = await response.text(); // Or response.json() if your server sends JSON response in case of errors
        console.error(`Failed to submit blog post: HTTP ${response.status} - ${errorBody}`);
        throw new Error(`Network response was not ok: HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log('Blog post submitted successfully:', result);
      // Here, handle any post-submission logic, like redirecting or clearing the form
    } catch (error) {
      console.error('Failed to submit blog post:', error);
      // Here, handle any errors
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
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
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
