// Import required packages
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Create an instance of the Express application
const app = express();

// Set the port for the server to run on, using the environment variable or a default value
const PORT = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define a route to handle GET requests to '/api/restaurants'
app.get('/api/restaurants', async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants');

    // Send the fetched data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Handle errors during the data fetching process
    console.error('Error fetching restaurants:', error.message);
    
    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
