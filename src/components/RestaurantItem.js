import React from 'react';

// The RestaurantItem component represents a single restaurant in the list.
// It takes a `name` prop to display the restaurant name.
const RestaurantItem = ({ name }) => {
  return <li>{name}</li>;
};

export default RestaurantItem;
