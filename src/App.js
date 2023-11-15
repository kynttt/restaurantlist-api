import React from 'react';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <div className='body'>
    <div className='app-container'>
      <h1 className='app-header'>Restaurant Lists</h1>
      <RestaurantList />
    </div>
    </div>
  );
}

export default App;
