import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Home = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const sortedMovies = () => {
    if (sortOrder === 'title') {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title)); 
    } else if (sortOrder === 'rating') {
      return [...movies].sort((a, b) => b.rating - a.rating); 
    }
    return movies; 
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="app-body">
      <Form onAddMovie={addMovie} />
      <div className="sort-button">
        <button onClick={() => setSortOrder('title')}>Trier par titre</button>
        <button onClick={() => setSortOrder('rating')}>Trier par note</button>
      </div>
      <List
        movies={sortedMovies()}
        onUpdateMovie={updateMovie}
        onDeleteMovie={deleteMovie}
      />
    </div>
  );
};

export default Home;
