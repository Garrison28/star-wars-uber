import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [vehicles, setVehicles] = setState([])
  const [vehicleId, setVehicleId] = setState(1)
  const [starShips, setStarShips] = setState([])
  const [starShipId, setStarShipId] = setState(1)

  useEffect(() => {
    axios.get('https://swapi.co/api/starships/')
      .then(res => {
        setStarShips(res.data)
      })
  })
}

export default App;
