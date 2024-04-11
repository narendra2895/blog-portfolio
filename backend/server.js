require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');





const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // If your frontend needs to send credentials like cookies or auth headers
}));


app.use(express.json());
app.use('/api/blogs', blogRoutes);



// This is a simple setup; adjust according to your security needs
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
