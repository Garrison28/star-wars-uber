import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import axios from 'axios';
import { PILOTS_URL } from '../constants';

const Pilot = (props) => {
    const pilots = [
        {
            name: 'Episode 1: The Phantom Menace',
            image: '/episodes/episode1.jpg'
        },
        {
            name: 'Episode 2: Attack of the Clones',
            image: '/episodes/episode2.jpg'
        },
        {
            name: 'Episode 3: Revenge of the Sith',
            image: '/episodes/episode3.jpg'
        },
        {
            name: 'Episode 4: A New Hope',
            image: '/episodes/episode4.jpg'
        },
        {
            name: 'Episode 5: The Empire Strikes Back',
            image: '/episodes/episode5.jpg'
        },
        {
            name: 'Episode 6: Return of the Jedi',
            image: '/episodes/episode6.jpg'
        },
        {
            name: 'Episode 7: The Force Awakens',
            image: '/episodes/episode7.jpg'
        },
        {
            name: 'Episode 8: The Last Jedi',
            image: '/episodes/episode8.jpg'
        },
        {
            name: 'Episode 9: The Rise of Skywalker',
            image: '/episodes/episode9.jpg'
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