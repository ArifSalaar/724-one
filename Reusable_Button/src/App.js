// src/App.js
import React from 'react';
import Button from './components/button/Button';
import './app.css';

const App = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <h1>Reusable Button Component</h1>
      <Button
        title="Click Me!"
        onClick={() => handleClick('Button Clicked!')}
        style={{ backgroundColor: 'lightblue', color: 'teal', padding:"20px" , fontSize:"22px", marginRight:"10px"}}
      />
      <Button
        title="Another Button"
        onClick={() => handleClick('Another Button Clicked!')}
        style={{ backgroundColor: 'lightgreen', color: 'black', padding:"20px" , fontSize:"22px" }}
      />
    </div>
  );
};

export default App;
