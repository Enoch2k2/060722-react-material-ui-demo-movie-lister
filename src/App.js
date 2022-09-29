
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieForm from './components/movies/MovieForm';
import MovieList from './components/movies/MovieList';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <MovieList movies={ movies } /> } />
        <Route path="/movies/new" element={ <MovieForm /> } />
      </Routes>
    </Router>
  );
}

export default App;
