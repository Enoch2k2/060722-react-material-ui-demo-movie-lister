import { createContext, useState } from "react";

const MoviesContext = createContext(null);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    fetch('http://localhost:3001/movies')
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }

  const addMovie = movie => {
    setMovies([...movies, movie])
  }

  const submitMovie = movie => {
    fetch('http://localhost:3001/movies', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(resp => resp.json())
      .then(movie => addMovie(movie))
  }

  return (
    <MoviesContext.Provider value={{ movies, setMovies, loadMovies, submitMovie }}>
      { children }
    </MoviesContext.Provider>
  )
}

export { MoviesProvider, MoviesContext };