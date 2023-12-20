import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList'; 
import Filter from './components/Filter';       
import AddMovieForm from './components/AddMovieForm';  



const App = () => {
  const initialMovies = [
    {
      title: 'Birds Of Prey (2020)',
      description: 'Description for Birds Of Prey',
      posterURL: 'https://ew.com/thmb/364AzBfyRIAprhdtFz4w5YqOiq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/birds-of-prey-album-1-2000-3acb33979c7f4966873ca9e14fd315f4.jpg',
      rating: 4.5,
    },
    {
      title: 'Jumanji (The Next Level)',
      description: 'Description for Jumanji',
      posterURL: 'https://target.scene7.com/is/image/Target/GUEST_f43f013c-a54e-4b0a-b576-f60d5fc667a3?wid=488&hei=488&fmt=pjpeg',
      rating: 4.2,
    },
    {
      title: 'Fast and Furious (Season 8) and After (2019)',
      description: 'Description for Fast and Furious',
      posterURL: 'https://play-lh.googleusercontent.com/kupQy2h3z8bV370r_2ctE_Nyz7I0_wvi0gt15xsb-aw5zH-a_6YCCUr_YKOhFl_twzu7',
      rating: 4.8,
    },
    {
      title: 'After (2019)',
      description: 'Description for After',
      posterURL: 'https://www.haya-mag.com/uploads/uploads/13c1b9b8aedb91d7e0b4487a4c1250b42e49c49a.jpeg',
      rating: 3.9,
    },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setFilterRating(e.target.value);
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
  );

  return (
    <div className="app">
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <AddMovieForm handleAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
