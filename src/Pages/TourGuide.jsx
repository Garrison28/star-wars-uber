import React, { useState, useEffect} from 'react';

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