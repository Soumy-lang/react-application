import React, { useState } from 'react';

const Item = ({ movie, onUpdateMovie, onDeleteMovie}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(movie);

  const handleEdit = () => {
    onUpdateMovie(editedMovie);
    setIsEditing(false);
  };

  return (
    <div className="movie-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedMovie.title}
            onChange={(e) => setEditedMovie({ ...editedMovie, title: e.target.value })}
          />
          <select
            value={editedMovie.rating}
            onChange={(e) => setEditedMovie({ ...editedMovie, rating: Number(e.target.value) })}
          >
            {[1, 2, 3, 4, 5].map(star => (
              <option key={star} value={star}>{`${star} étoile(s)`}</option>
            ))}
          </select>
          <textarea
            value={editedMovie.comment}
            onChange={(e) => setEditedMovie({ ...editedMovie, comment: e.target.value })}
          ></textarea>
          <button onClick={handleEdit}>Sauvegarder</button>
        </>
      ) : (
        <>
          <h3>{movie.title}</h3>
          <p>{'⭐'.repeat(movie.rating)}</p>
          {movie.comment && <p>{movie.comment}</p>}
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => onDeleteMovie(movie.id)}>Supprimer</button>
        </>
      )}
    </div>
  );
};

export default Item;
