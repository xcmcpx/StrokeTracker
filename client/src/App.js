import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';

import { ToastContainer, toast } from 'react-toastify';


import { getCookie }  from './helpers/cookies';

import axios from "axios";

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: JSON.stringify(theme.palette.primary.main).replace(/['"]+/g, ''),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '@global': {
    html: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.6em',
        lineHeight: 1.0
      },
    }
  },
}));

const App = (props) => {

  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //#region auth Functions
  const loginSuccess = res => {
    axios.post('http://localhost:4000/login', {
      headers: {
        Authorization: `Bearer ${res.tokenId}`
      }
    })
      .then(res => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
          document.cookie = `SaltySpitoon=true;max-age=${(res.data.blueberry * 60)};path=/`;
          document.cookie = `RubberDucky=${res.data.email};max-age=${(res.data.blueberry * 60)};path=/`;
        } else {
          setIsLoggedIn(false);
          toast.error(`${res.data.msg}`, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      });
  };

  const loginFailure = res => {
    toast.error(`[Login Failure]: ${res.error}`, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  //#endregion

  //render

  useEffect(() => {
    let SaltySpitoon = getCookie('SaltySpitoon');
    if (SaltySpitoon !== null && SaltySpitoon !== '' && SaltySpitoon === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className={classes.root}>
      <ToastContainer className='mobileToast' />
      {!isLoggedIn &&
        <LoginPage loginSuccess={loginSuccess} loginFailure={loginFailure} />
      }
      {isLoggedIn &&
        <HomePage  />
      }
    </div>
  );
}

export default App;
