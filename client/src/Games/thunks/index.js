import * as actionsGames from '../actions';
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
    const gamesId = currentState.season + '-' + currentState.country.toLowerCase();
    if (state.games.id !== gamesId) {
        dispatch(getGames(params));
    }
};

export const getGames = (params) => (dispatch, getState) => {
    // reset games
    dispatch(actionsGames.getGamesSuccess([]));

    dispatch(actionsGames.getGames());
    let state = getState();
    let currentState = state.home.currentState;
    const team = decodeURI(state.router.location.search.slice(state.router.location.search.indexOf('?team=') + 6));
    if (team) {
        dispatch(updateCurrentState({...params, team}));
    } else {
        dispatch(updateCurrentState({...params, team: null}));
    }

    const gamesId = currentState.season + '-' + currentState.country.toLowerCase();
    fetch(`${baseUrl}/api/v1/seasons/${currentState.season}/countries/${currentState.country}/leagues/${currentState.league}${team ? '/teams/' + team : ''}/${team ? 'games' : 'gamesfull'}`).then(
        response => response.json()
    ).then(data =>{
        console.log(data);
        dispatch(actionsGames.getGamesSuccess(data.data, gamesId));
    }).catch(error => {
        console.log(error);
        dispatch(actionsGames.getGamesFailure(error));
    });
};
