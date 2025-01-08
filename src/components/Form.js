import React, { useState } from 'react';

const Form = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddMovie({
      id: Date.now(),
      title,
      rating,
      comment,
    });

    setTitle('');
    setRating(1);
    setComment('');
  };

  return (
    <div class="form-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du film"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map(star => (
            <option key={star} value={star}>{`${star} étoile(s)`}</option>
          ))}
        </select>
        <textarea
          placeholder="Commentaire (facultatif)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
    
  );
};

export default Form;
