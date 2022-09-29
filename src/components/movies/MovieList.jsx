import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px'
  },
}));

const MovieList = ({ movies }) => {
  const classes = useStyles();

  const movieCards = movies.map(movie => <MovieCard key={ movie.id } movie={ movie } />)

  return (  
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        { movieCards }
      </List>
    </div>
  )
}

export default MovieList