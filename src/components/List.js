import React from 'react';
import Item from './Item';

const List = ({ movies, onUpdateMovie, onDeleteMovie}) => {
  return (
    <div className="items-list">
      {movies.map(movie => (
        <Item
          key={movie.id}
          movie={movie}
          onUpdateMovie={onUpdateMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </div>
  );
};

export default List;

