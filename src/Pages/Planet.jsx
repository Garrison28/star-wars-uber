import React from 'react';
import Carousel from '../Components/Carousel';

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