import * as actionsGames from '../actions';
import * as util from '~/common/util';
import {updateCurrentState} from '~/Home/actions';

export const getGames = (params) => (dispatch, getState) => {
    // reset games
    dispatch(actionsGames.getGamesSuccess([]));

    dispatch(actionsGames.getGames());
    let state = getState();
    let currentState = state.home.currentState;
    if (currentState.season !== params.season || currentState.country !== params.country || currentState.league !== params.league) {
        dispatch(updateCurrentState(params));
        state = getState();
        currentState = state.home.currentState;
    }
    const team = state.router.location.search.slice(state.router.location.search.indexOf('?team=') + 6);
    fetch(`/api/v1/seasons/${currentState.season}/countries/${currentState.country}/leagues/${currentState.league}/${team ? 'teams/' + team : ''}/${team ? 'games' : 'gamesfull'}`).then(
        response => response.json()
    ).then(data =>{
        console.log(data);
        dispatch(actionsGames.getGamesSuccess(data.data));
    }).catch(error => {
        console.log(error);
        dispatch(actionsGames.getGamesFailure(error));
    });
};
