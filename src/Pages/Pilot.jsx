import React from 'react';
import Carousel from '../Components/Carousel';

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