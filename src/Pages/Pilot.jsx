import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { PILOTS_URL } from '../constants';

const useStyles = makeStyles({
    home: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    prompt: {
        color: 'white',
    },
    button: {
        width: '90vw',
        height: '10vh',
        backgroundColor: '#2E88D1',
    }
})

const Pilot = () => {
    const classes = useStyles()
    const pilots = [
        {
            name: 'Arvel Crynyd',
            image: '/pilots/Arvel-crynyd.jpg'
        },
        {
            name: 'Biggs Darklighter',
            image: '/pilots/Biggs_Darklighter.jpg'
        },
        {
            name: 'Boba Fett',
            image: '/pilots/boba-fett.jpeg'
        },
        {
            name: 'Chewbacca',
            image: '/pilots/chewbacca.jpg'
        },
        {
            name: 'Darth Maul',
            image: '/pilots/Darth_Maul.jpg'
        },
        {
            name: 'Darth Vader',
            image: '/pilots/darth-vader.jpg'
        },
        {
            name: 'General Grievous',
            image: '/pilots/grievous.jpg'
        },
        {
            name: 'Young Han Solo',
            image: '/pilots/Han-solo-young.jpg'
        },
        {
            name: 'Old Han Solo',
            image: '/pilots/Han-solo-old.png'
        }

    ]
    return (
        <div>
            <h3 className={classes.prompt}>Choose Your Pilot!</h3>
            <Carousel items={pilots} /><br />
            <a href="/starship">
                <Button className={classes.button}>Choose your Pilot!</Button>
            </a>
        </div>
    )
}

export default Pilot;