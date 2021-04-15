import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CPCodesIcon from '../../Icons/CPCodesIcon.svg';
import CPCodesIconMobile from '../../Icons/CPCodesIconMobile.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: '10px',
        [theme.breakpoints.down('xs')]: {
            margin: '0'
        }
    },
    appBar: {
        borderRadius: '0px 0px 10px 10px',
        backgroundColor: `${theme.palette.secondary.main}`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: '63px',
        '&:hover': {
            backgroundColor: `${theme.palette.secondary.light}`
        },
        borderRadius: '0px',
        letterSpacing: '1px',
        color: `${theme.palette.primary.main}`,
        [theme.breakpoints.down('xs')]: {
            margin: '0'
        }
    },
    brand: {
        flexGrow: 1,
        marginLeft: '3px',
        [theme.breakpoints.down('xs')]: {
            margin: '0'
        }
    },
    brandIcon: {
        width: '32px',
        height: '32px',
        backgroundImage: `url(${CPCodesIcon})`,
        [theme.breakpoints.down('xs')]: {
            width: '10px',
            height: '10px',
            backgroundImage: `url(${CPCodesIconMobile})`,
        }
    },
    menuOptions: {
        padding: '0 5px',
        minHeight: '100%'
    }
}));

const MainMenu = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <div className={classes.brandIcon}></div>
                    <Typography variant="h6" className={classes.brand}>
                        <Button className={classes.menuButton} size='large' id='home' onClick={props.handleClick}>Home</Button>
                    </Typography>
                    <Typography className={classes.menuOptions}>
                        <Button className={classes.menuButton} id='fullRound' onClick={props.handleClick}>Full Round</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainMenu;