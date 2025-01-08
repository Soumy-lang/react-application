import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpcomingMovies = ({ addToWishlist }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e8e9f34', {
          params: {
            api_key: 'e8e9f34',
            language: 'fr-FR'
          }
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des films", error);
        setLoading(false);
      }
    };
    
    fetchUpcomingMovies();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Prochaines Sorties</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie.id} style={{ marginBottom: '20px' }}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <button onClick={() => addToWishlist(movie)}>Ajouter à la wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
