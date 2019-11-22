import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Carousel from '../Components/Carousel';
import { TOUR_GUIDE_URL } from '../constants';


const TourGuide = () => {
    const [guides, setGuides] = useState([])
    useEffect(() => {
        axios.get(TOUR_GUIDE_URL)
        .then((response) => {
            setGuides(response.data)
        })
    }, [])
    return(
        <Carousel items={guides}/>
    )
}

export default TourGuide;