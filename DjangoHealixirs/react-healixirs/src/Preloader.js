import React, { useState, useEffect } from 'react';
import Preloader from './Preloader'; // Import the Preloader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in your actual application)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate 3 seconds loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader /> // Display the Preloader component while loading
      ) : (
        <div>
          {/* Your main content goes here */}
          <h1>Welcome to My React App</h1>
          <p>This is the main content of the app.</p>
        </div>
      )}
    </div>
  );
};

export default App;
