import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import StarMap from './Pages/StarMap';
import Pilot from './Pages/Pilot';
import Planet from './Pages/Planet';
import Starship from './Pages/Starship';
import Summary from './Pages/Summary';
import TourGuide from './Pages/TourGuide';



const Content = () => {
    const [episode, setEpisode] = useState('')
    const [episodeImage, setEpisodeImage] = useState('')
    const [pilot, setPilot] = useState('')
    const [pilotImage, setPilotImage] = useState('')
    const [starship, setStarship] = useState('')
    const [starshipImage, setStarshipImage] = useState('')
    const [guide, setGuide] = useState('')
    const [guideImage, setGuideImage] = useState('')

    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/episodes'
                render={() =>
                    <Episodes updateData={setEpisode} updateImage={setEpisodeImage} />}
            />
            <Route exact path='/pilot'
                render={() =>
                    <Pilot updateData={setPilot} updateImage={setPilotImage} />}
            />
            <Route exact path='/starship'
                render={() =>
                    <Starship updateData={setStarship} updateImage={setStarshipImage} />}
            />
            <Route exact path='/tourguide'
                render={() =>
                    <TourGuide updateData={setGuide} updateImage={setGuideImage} />}
            />
            <Route exact path='/summary'
                render={() =>
                    <Summary  
                        episode={episode}
                        episodeImage={episodeImage}
                        pilot={pilot}
                        pilotImage={pilotImage}
                        starship={starship}
                        starshipImage={starshipImage}
                        guide={guide}
                        guideImage={guideImage}
                    />}
            />

        </Switch>
    )
}

export default Content;