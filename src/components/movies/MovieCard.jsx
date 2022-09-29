import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <ListItem button>
      <ListItemText primary={ movie.title } />
    </ListItem>
  )
}

export default MovieCard