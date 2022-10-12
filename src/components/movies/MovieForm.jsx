import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Typography } from '@material-ui/core';
import { MoviesContext } from '../../context/movies';
import { useHandleChange } from '../../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px'
  },
}));

const MovieForm = () => {

  const classes = useStyles();

  const [title, handleTitle] = useHandleChange("")
  const [image_url, handleImageUrl] = useHandleChange("")

  const { submitMovie } = useContext(MoviesContext);

  const handleSubmit = e => {
    e.preventDefault();

    submitMovie({ title, image_url })
  }

  return (
    <Box component="div" className={ classes.root }>
      <Typography variant="h5">
        Create Movie
      </Typography>
      <form noValidate autoComplete="off" onSubmit={ handleSubmit }>
        <div>
          <TextField
            id="title"
            label="Title"
            type="text"
            value={ title }
            onChange={ handleTitle }
            />
        </div>
        <div>
          <TextField
            id="image_url"
            label="Image Url"
            type="text"
            value={ image_url }
            onChange={ handleImageUrl }
            />
        </div>
        <br />
        <Button size="small" variant="contained" color="primary" type="submit">
          Create Movie
        </Button>
      </form>
    </Box>
  )
}

export default MovieForm