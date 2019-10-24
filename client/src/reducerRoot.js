import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import home from './Home/reducers';
import games from './Games/reducers';
import game from './Game/reducers';
import team from './Team/reducers';

import * as History from 'history';
const history = History.createBrowserHistory();

export default combineReducers({
    router: connectRouter(history),
    home,
    games,
    game,
    team
});
