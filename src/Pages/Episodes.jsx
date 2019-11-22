import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../Components/Carousel';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    axios.get('https://swapi.co/api/films/')
      .then((response) => {
        setEpisodes(response.data)
      })
  }, [])

  return(
    <Carousel items={episodes} />
)
}

export default Episodes;