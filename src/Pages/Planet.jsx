import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import axios from 'axios';
import { PLANET_URL } from '../constants';


const Planet = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        axios.get(PLANET_URL)
        .then((response) => {
            setPlanets(response.data)
        })
    }, [])
    return(
        <Carousel items={planets} />
    )
}

export default Planet;