import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
    overflow: 'hidden'
  },

}));

const Home = () => {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <ToastContainer />
      Home Page Hit
    </div>
  );
}

export default Home;