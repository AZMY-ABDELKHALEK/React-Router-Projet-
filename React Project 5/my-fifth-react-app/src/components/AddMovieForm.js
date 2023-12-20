import React, { useState } from 'react';

const AddMovieForm = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} required />
      <input type="text" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleChange} required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
