import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px'
  },
}));

const MovieForm = ({ addMovie }) => {

  const classes = useStyles();

  const [title, setTitle] = useState("")
  const [image_url, setImageUrl] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3001/movies', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, image_url })
    })
      .then(resp => resp.json())
      .then(movie => addMovie(movie))

    
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
            onChange={ e => setTitle( e.target.value )}
            />
        </div>
        <div>
          <TextField
            id="image_url"
            label="Image Url"
            type="text"
            value={ image_url }
            onChange={ e => setImageUrl( e.target.value )}
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