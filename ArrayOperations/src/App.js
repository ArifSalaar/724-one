// src/App.js
import React, { useState } from 'react';
// import './App.css';

const App = () => {
  const [array, setArray] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  // map operation
  const mappedArray = array.map(subArray => subArray.map(num => num * 2));

  // flat operation
  const flatArray = array.flat();

  // slice operation
  const slicedArray = flatArray.slice(1, 5);

  // filter operation
  const filteredArray = flatArray.filter(num => num > 4);

  return (
    <div className="container" style={{padding:"80px"}}>
      <h1 style={{textAlign:"center", color:"#333"}}>Array Operations in React</h1>

      <div className="array-section">
        <h2>Original Array</h2>
        <h4>{JSON.stringify(array, null, 2)}</h4>
      </div>
<hr />
      <div className="array-section">
        <h2>Mapped Array (Each element multiplied by 2)</h2>
        <h4>{JSON.stringify(mappedArray, null, 2)}</h4>
      </div>
      <hr />

      <div className="array-section">
        <h2>Flattened Array</h2>
        <h4>{JSON.stringify(flatArray, null, 2)}</h4>
      </div>

<hr />
      <div className="array-section">
        <h2>Sliced Array (Elements from index 1 to 4)</h2>
        <h4>{JSON.stringify(slicedArray, null, 2)}</h4>
      </div>
<hr />
      <div className="array-section">
        <h2>Filtered Array (Elements greater than 4)</h2>
        <h4>{JSON.stringify(filteredArray, null, 2)}</h4>
      </div>
    </div>
  );
};

export default App;
