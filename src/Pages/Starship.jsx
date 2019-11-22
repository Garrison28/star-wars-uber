import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import axios from 'axios';
import { SHIPS_URL } from '../constants';

const Starship = (props) => {
    const [ships, setShips] = useState([])
    useEffect(() => {
        axios.get(SHIPS_URL)
            .then((response) => {
                setShips(response.data)
            })
    }, [])
    return (
        <Carousel items={ships}
            updateData={props.updateData}
            updateImage={props.updateImage}
        />
    )
}

export default Starship;