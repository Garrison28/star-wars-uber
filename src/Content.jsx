import React from 'react';
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
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/episodes' component={Episodes} />
            <Route exact path='/starmap' component={StarMap} />
            <Route exact path='/pilot' component={Pilot} />
            <Route exact path='/planet' component={Planet} />
            <Route exact path='/starship' component={Starship} />
            <Route exact path='/summary' component={Summary} />
            <Route exact path='/tourguide' component={TourGuide} />
        </Switch>
    )
}   

export default Content;