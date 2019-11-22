import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
    logo: {
        width: '100vh',
        
    }
})

const Home = () => {
    const classes = useStyles();
    return(
        <div>
            <img className={classes.logo} src='/logo.png' />
            <a href="/episodes">Start</a>
        </div>
    )
}

export default Home;