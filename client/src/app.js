import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Games from './Games';
import Game from './Game';
import NotFound from './NotFound';
import Team from './Team';

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/games/:season/:country/:league' component={Games} />
                <Route exact path='/game/:season/:country/:league/:id' component={Game} />
                <Route exact path='/team/:season/:country/:league/:team' component={Team} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App;
