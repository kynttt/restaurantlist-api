// Import React library to create React components
import React from 'react';

// Import the RestaurantList component
import RestaurantList from './components/RestaurantList';

// Import the main styling for the App component
import './App.css';

// Define the main App component
function App() {
  return (
    // Wrap the entire application in a container div with a class 'body'
    <div className='body'>
      {/* Container for the main content */}
      <div className='app-container'>
        {/* Header with the title of the application */}
        <h1 className='app-header'>Restaurants List</h1>

        {/* Include the RestaurantList component to display the list of restaurants */}
        <RestaurantList />
      </div>
      {/* End of the main content container */}
    </div>
    // End of the outer container
  );
}

// Export the App component to make it accessible to other parts of the application
export default App;
