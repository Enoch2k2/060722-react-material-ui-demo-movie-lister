import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  button: {
    fontSize: '12px',
    backgroundColor: '#e8fffd'
  }
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Grid item xs={2}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={ movie.image_url }
            title="Contemplative Reptile"
          />
          <CardContent>
            <p>{movie.title}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" className={ classes.button }>
            More Details
          </Button>
          <Button size="small" color="primary" className={ classes.button }>
            Delete Movie
          </Button>
        </CardActions>
      </Card>
      {/* <h3>{ movie.title }</h3>
      <img src={ movie.image_url } alt="movie poster" /> */}
    </Grid>
  )
}

export default MovieCard