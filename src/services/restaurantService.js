// Import the Axios library for making HTTP requests
import axios from 'axios';

// Define the API endpoint for fetching restaurants
const API_ENDPOINT = 'http://localhost:5000/api/restaurants';

// Function to fetch restaurants from the API
export const fetchRestaurants = async () => {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(API_ENDPOINT);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs during the request, log the error and return an empty array
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
