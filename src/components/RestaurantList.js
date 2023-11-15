import React, { useEffect, useState } from 'react';
import RestaurantItem from './RestaurantItem'; // Importing the RestaurantItem component
import { fetchRestaurants } from '../services/restaurantService'; // Importing the fetchRestaurants service function
import './RestaurantList.css'; // Importing the styles for RestaurantList

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]); // State to hold the fetched restaurant data

  useEffect(() => {
    // Effect hook to fetch restaurant data when the component mounts
    const fetchData = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  // Group restaurants by location
  const groupedRestaurants = restaurants.reduce((acc, restaurant) => {
    const locationIndex = acc.findIndex((group) => group.state === restaurant.state);

    if (locationIndex === -1) {
      // If the location is not found, create a new group
      acc.push({ state: restaurant.state, restaurants: [restaurant] });
    } else {
      // If the location is found, add the restaurant to the existing group
      acc[locationIndex].restaurants.push(restaurant);
    }

    return acc;
  }, []);

  return (
    <div className='restaurant-list-container'>
      {groupedRestaurants.map((location, index) => (
        <div key={index} className='location-container'>
          <h2 className='location-header'>{location.state}:</h2>
          {location.restaurants && location.restaurants.length > 0 ? (
            // Render the list of restaurants if available
            <ul className='restaurant-list'>
              {location.restaurants.map((restaurant, restaurantIndex) => (
                <RestaurantItem key={restaurantIndex} name={restaurant.restaurant_name} />
              ))}
            </ul>
          ) : (
            // Display a message if no restaurants are available in this location
            <p className='no-restaurants-message'>No restaurants available in this location.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
