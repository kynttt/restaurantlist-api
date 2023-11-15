import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5000/api/restaurants';

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
