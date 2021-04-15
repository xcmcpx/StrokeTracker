import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainMenu from '../components/menus/MainMenu';
import FullRound from '../components/FullRound';



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
    overflow: 'hidden',
  },
  page: {
    display:'flex',
    justifyContent: 'center',
    width: '90%',
    padding: '20px',
    backgroundColor: theme.palette.secondary.dark
  },
  scorecardCtr: {
    display: 'flex',
    maxHeight: '100%',
    maxWidth: '65%',
    justifyContent: 'center',
    padding: '2em',
    backgroundColor: theme.palette.secondary.main
  },
  scoreCardForm: {
    height: '100%',
    width: '100%',

  },
  scorecard: {
    height: '100%',
    width: '100%'
  },
  item: {
    border: `5px solid ${theme.palette.secondary.light}`
  }
}));

const Home = () => {
  const classes = useStyles();

  const [showHome, setShowHome] = useState(true);
  const [showFullRound, setShowFullRound] = useState(false);

  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case ('home'):
        setShowFullRound(false);
        setShowHome(true);
        break;
      case ('fullRound'):
        setShowFullRound(true);
        setShowHome(false);
        break;
    }
  };


  return (
    <div className={classes.root}>
      <MainMenu handleClick={handleClick} />
      <div className={classes.page}>
      {showHome &&
        <div className={classes.scorecardCtr}>
          <form id='scoreCard-form' className={classes.scoreCardForm}>
            <Grid className={classes.scorecard} container justify='center' spacing={4}>
              <Grid className={classes.item} item xs={12}>
                Course Name
            </Grid>
              <Grid className={classes.item} item xs={2}>
                HOLE
            </Grid>
              <Grid className={classes.item} item xs={1}>1</Grid>
              <Grid className={classes.item} item xs={1}>2</Grid>
              <Grid className={classes.item} item xs={1}>3</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>5</Grid>
              <Grid className={classes.item} item xs={1}>6</Grid>
              <Grid className={classes.item} item xs={1}>7</Grid>
              <Grid className={classes.item} item xs={1}>8</Grid>
              <Grid className={classes.item} item xs={1}>9</Grid>
              <Grid className={classes.item} item xs={1}>OUT</Grid>
              <Grid className={classes.item} item xs={2}>
                Handicap
            </Grid>
              <Grid className={classes.item} item xs={1}>1</Grid>
              <Grid className={classes.item} item xs={1}>2</Grid>
              <Grid className={classes.item} item xs={1}>3</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>5</Grid>
              <Grid className={classes.item} item xs={1}>6</Grid>
              <Grid className={classes.item} item xs={1}>7</Grid>
              <Grid className={classes.item} item xs={1}>8</Grid>
              <Grid className={classes.item} item xs={1}>9</Grid>
              <Grid className={classes.item} item xs={1}></Grid>
              <Grid className={classes.item} item xs={2}>
                Par
            </Grid>
              <Grid className={classes.item} item xs={1}>5</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>3</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>5</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>4</Grid>
              <Grid className={classes.item} item xs={1}>3</Grid>
              <Grid className={classes.item} item xs={1}>36</Grid>
            </Grid>
          </form>
        </div>
      }
      {
        showFullRound &&
        <FullRound />
      }
      </div>
    </div>
  );
}

export default Home;