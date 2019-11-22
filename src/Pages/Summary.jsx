import React from 'react';



const Summary = (props) => {
  return (
    <div className="container">
      <h1>Review Your Choices</h1>
      <div className="edit">
        <h3>Episode: 1  {props.episode} <img alt='' src={props.episodeImage} /></h3><br />
        <h3>Pilot: {props.pilot} <img alt='' src={props.pilotImage} /></h3><br />
        <h3>Spacecraft: {props.starship} <img alt='' src={props.starshipImage} /></h3><br />
        <h3>Tour guide: {props.guide} <img alt='' src={props.guideImage} /></h3>
      </div>
      <div className="confirm">
        <button>Confirm Order</button>
      </div>
    </div>
  )

}

export default Summary;