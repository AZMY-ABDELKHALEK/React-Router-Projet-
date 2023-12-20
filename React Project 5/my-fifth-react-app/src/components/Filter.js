import React from 'react';

const Filter = ({ filterTitle, filterRating, handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by Title" value={filterTitle} onChange={handleTitleChange} />
      <input type="number" placeholder="Filter by Rating" value={filterRating} onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
