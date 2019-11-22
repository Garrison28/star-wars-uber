import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import axios from 'axios';
import { PLANET_URL } from '../constants';


const Planet = (props) => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        axios.get(PLANET_URL)
            .then((response) => {
                setPlanets(response.data)
            })
    }, [])
    return (
        <Carousel items={planets}
            updateData={props.updateData}
            updateImage={props.updateImage} />
    )
}

export default Planet;