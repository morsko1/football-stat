import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App;
