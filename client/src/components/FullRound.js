import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const FullRound = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            Full Round
        </div>
    );
}

export default FullRound;