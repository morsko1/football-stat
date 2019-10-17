export const SET_GAME = 'game/SET_GAME';
export const GET_GAME = 'game/GET_GAME';
export const GET_GAME_SUCCESS = 'game/GET_GAME_SUCCESS';
export const GET_GAME_FAILURE = 'game/GET_GAME_FAILURE';

export const setGame = (game) => ({
    type: SET_GAME,
    payload: {
        game
    }
});
export const getGame = () => ({
    type: GET_GAME
});

export const getGameSuccess = (data) => ({
    type: GET_GAME_SUCCESS,
    payload: {
        data
    }
});

export const getGameFailure = (error) => ({
    type: GET_GAME_FAILURE,
    payload: {
        error
    }
});
