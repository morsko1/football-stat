import * as actionsTeam from '../actions';
import * as util from '~/common/util';
import {baseUrl} from '~/common/urls';
import {updateCurrentState} from '~/Home/actions';

export const init = (params) => (dispatch, getState) => {
    let state = getState();
    let currentState = state.home.currentState;
    let games = state.games.games;
    if (currentState.season !== params.season || currentState.country !== params.country || currentState.league !== params.league) {
        dispatch(updateCurrentState(params));
        state = getState();
        currentState = state.home.currentState;
    }
    // todo : update games if different state (season, country, league, team!)
    // if (!games.length) {
    //     dispatch(getGames(params));
    // }
    dispatch(actionsTeam.changeActiveTab('games'));
    dispatch(getGames(params));
};

export const getGames = (params) => (dispatch, getState) => {
    // reset games
    dispatch(actionsTeam.getGamesSuccess([]));

    dispatch(actionsTeam.getGames());
    let state = getState();
    let currentState = state.home.currentState;
    const team = decodeURI(params.team);
    if (team) {
        dispatch(updateCurrentState({...params, team}));
    } else {
        return;
    }
    fetch(`${baseUrl}/api/v1/seasons/${currentState.season}/countries/${currentState.country}/leagues/${currentState.league}/teams/${team}/games`).then(
        response => response.json()
    ).then(data =>{
        console.log(data);
        dispatch(actionsTeam.getGamesSuccess(data.data));
    }).catch(error => {
        console.log(error);
        dispatch(actionsTeam.getGamesFailure(error));
    });
};
