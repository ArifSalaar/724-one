// src/components/ListFooter.js
import React from 'react';
import './ListFooter.css';

const ListFooter = ({ loading, loadMore }) => {
  return (
    <div className="list-footer">
      {loading ? <div className="loader"></div> : <button style={{padding:"10px",border:"none", borderRadius:"8px", fontSize:"16px", backgroundColor:"teal", color:"white"}} onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default ListFooter;
