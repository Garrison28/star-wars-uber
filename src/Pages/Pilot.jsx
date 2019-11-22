import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import axios from 'axios';
import { PILOTS_URL } from '../constants';

const Pilot = () => {
    const [pilots, setPilots] = useState([])
    useEffect(() => {
        axios.get(PILOTS_URL)
        .then((response) => {
            setPilots(response.data)
        })
    }, [])
    return(
        <Carousel items={pilots} />
    )
}

export default Pilot;