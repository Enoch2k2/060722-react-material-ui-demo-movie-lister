import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MovieCard from './MovieCard';
import { MoviesContext } from '../../context/movies';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px'
  },
}));

const MovieList = () => {
  const classes = useStyles();

  const { movies } = useContext(MoviesContext);

  const movieCards = movies.map(movie => <MovieCard key={ movie.id } movie={ movie } />)

  return (  
    <Grid container spacing={1} className={ classes.root }>
      { movieCards }
    </Grid>
  )
}

export default MovieList