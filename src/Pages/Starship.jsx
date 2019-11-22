import React from 'react';

const Starship = () => {
    const [ships, setShips] = useState([])
    useEffect(() => {
        axios.get(SHIPS_URL)
        .then((response) => {
            setShips(response.data)
        })
    }, [])
    return(
        <Carousel />
    )
}

export default Starship;