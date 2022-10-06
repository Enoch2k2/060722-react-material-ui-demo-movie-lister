
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieForm from './components/movies/MovieForm';
import MovieList from './components/movies/MovieList';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import { Container } from '@material-ui/core';

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  const addMovie = movie => {
    console.log(movie)
    setMovies([...movies, movie])
  }

  return (
    <Router>
      <Navbar />
      <Container fixed>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <MovieList movies={ movies } /> } />
          <Route path="/movies/new" element={ <MovieForm addMovie={ addMovie } /> } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
