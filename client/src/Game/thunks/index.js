import * as actionsGame from '../actions';
import * as util from '~/common/util';
import {updateCurrentState} from '~/Home/actions';
import {getGames} from '~/Games/thunks';

export const init = (params) => (dispatch, getState) => {
    let state = getState();
    console.log('id = ', params.id);
    let game = state.games.games.find(item => item.id === parseInt(params.id));
    if (game) {
        // set game
        dispatch(actionsGame.setGame(game));
    } else {
        // get games first
        dispatch(getGames(params, true));
    }
};
