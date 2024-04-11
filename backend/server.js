require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');



const app = express();


app.use(express.json());
app.use('/api/blogs', blogRoutes);


app.use(cors({
  origin: 'http://localhost:3000', // Specify the frontend origin here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'], // Specify other headers as needed
}));

// This is a simple setup; adjust according to your security needs
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
