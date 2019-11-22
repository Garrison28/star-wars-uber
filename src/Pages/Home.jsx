import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    home: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100vw',
        marginTop: '20vh',
    },
    button: {
        width: '90vw',
        height: '10vh',
        backgroundColor: '#2E88D1',
    }
})

const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.home}>
            <img className={classes.logo} src='/logo.png' />
            <a href="/episodes">
                <Button className={classes.button}>Create Your Tour</Button>
            </a>
        </div>
    )
}

export default Home;