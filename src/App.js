
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieForm from './components/movies/MovieForm';
import MovieList from './components/movies/MovieList';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import { Container } from '@material-ui/core';
import { MoviesContext } from './context/movies';

const App = () => {

  const { loadMovies } = useContext(MoviesContext);

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <Router>
      <Navbar />
      <Container fixed>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <MovieList /> } />
          <Route path="/movies/new" element={ <MovieForm /> } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
