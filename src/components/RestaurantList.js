import React, { useEffect, useState } from 'react';
import RestaurantItem from './RestaurantItem';
import { fetchRestaurants } from '../services/restaurantService';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  // Group restaurants by location
  const groupedRestaurants = restaurants.reduce((acc, restaurant) => {
    const locationIndex = acc.findIndex((group) => group.state === restaurant.state);

    if (locationIndex === -1) {
      acc.push({ state: restaurant.state, restaurants: [restaurant] });
    } else {
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
            <ul className='restaurant-list'>
              {location.restaurants.map((restaurant, restaurantIndex) => (
                <RestaurantItem key={restaurantIndex} name={restaurant.restaurant_name}/>
              ))}
            </ul>
          ) : (
            <p className='no-restaurants-message'>No restaurants available in this location.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
