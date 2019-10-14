import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Games from './Games';
import NotFound from './NotFound';

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/games/:season/:country/:league' component={Games} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App;
