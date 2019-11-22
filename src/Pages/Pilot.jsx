import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { PILOTS_URL } from '../constants';

const Pilot = (props) => {
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
        <Carousel items={pilots}
            updateData={props.updateData}
            updateImage={props.updateImage}
        />
    )
}

export default Pilot;