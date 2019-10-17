import * as actionsGame from '../actions';
import * as util from '~/common/util';
import {updateCurrentState} from '~/Home/actions';

export const init = (params) => (dispatch, getState) => {
    let state = getState();
    let game = state.games.games.find(item => item.id === parseInt(params.id));
    if (game) {
        // set game
        dispatch(actionsGame.getGameSuccess(game));
    } else {
        // get game first
        dispatch(getGame(params));
    }
};

export const getGame = (params) => (dispatch, getState) => {
    let state = getState();
    let currentState = state.home.currentState;
    if (currentState.season !== params.season || currentState.country !== params.country || currentState.league !== params.league) {
        dispatch(updateCurrentState(params));
        state = getState();
        currentState = state.home.currentState;
    }
    dispatch(actionsGame.getGame());
    fetch(`/api/v1/seasons/${currentState.season}/countries/${currentState.country}/leagues/${currentState.league}/games/${params.id}`).then(
        response => response.json()
    ).then(data =>{
        console.log(data);
        dispatch(actionsGame.getGameSuccess(data.data));
    }).catch(error => {
        console.log(error);
        dispatch(actionsGame.getGameFailure(error));
    });
};
