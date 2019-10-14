export const GET_GAMES = 'games/GET_GAMES';
export const GET_GAMES_SUCCESS = 'games/GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'games/GET_GAMES_FAILURE';

export const getGames = () => ({
    type: GET_GAMES
});

export const getGamesSuccess = (data) => ({
    type: GET_GAMES_SUCCESS,
    payload: {
        data
    }
});

export const getGamesFailure = (error) => ({
    type: GET_GAMES_FAILURE,
    payload: {
        error
    }
});
