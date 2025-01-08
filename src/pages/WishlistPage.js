import React from 'react';

const WishlistPage = ({ wishlist }) => {
  if (!wishlist || wishlist.length === 0) {
    return <p>Votre wishlist est vide.</p>;
  }

  return (
    <div>
      <h2>Votre Wishlist</h2>
      <ul>
        {wishlist.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Sortie prévue : {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
