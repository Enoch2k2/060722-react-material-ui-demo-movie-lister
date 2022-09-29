import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(126, 203, 247)'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={ classes.appBar }>
        <Toolbar>
          <Typography variant="h6" className={ classes.title }>
            Move Lister
          </Typography>
          <Button color="inherit" to="/" component={ Link }>Home</Button>
          <Button color="inherit" to="/movies" component={ Link }>Movies</Button>
          <Button color="inherit" to="/movies/new" component={ Link }>Create Movies</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar