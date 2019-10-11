import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';

import reducerRoot from './reducerRoot';

import * as History from 'history';
export const history = History.createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(reducerRoot, initialState, composedEnhancers);
