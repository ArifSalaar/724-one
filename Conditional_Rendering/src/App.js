// src/App.js
import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Conditional Rendering </h1>
      
      {isLoggedIn ? (
        <>
          <h2>Welcome back, User!</h2>
          <button  style={{padding:"15px", borderRadius:"8px",border:"none", background:"teal", color:"white", fontSize:"19px"}} onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2 >Please log in.</h2>
          <button style={{padding:"15px", borderRadius:"8px",border:"none", background:"teal", color:"white", fontSize:"19px"}} onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
