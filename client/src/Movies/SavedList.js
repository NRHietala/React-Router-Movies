import React from 'react';

export default function SavedList(props) {
  const { list } = props
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
}
