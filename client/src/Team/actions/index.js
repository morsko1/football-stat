export const GET_GAMES = 'team/GET_GAMES';
export const GET_GAMES_SUCCESS = 'team/GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'team/GET_GAMES_FAILURE';
export const CHANGE_ACTIVE_TAB = 'team/CHANGE_ACTIVE_TAB';
export const SORT = 'teams/SORT';

export const getGames = () => ({
    type: GET_GAMES
});

export const getGamesSuccess = (data, id) => ({
    type: GET_GAMES_SUCCESS,
    payload: {
        games: data.games,
        summary: data.summary,
        id: id
    }
});

export const getGamesFailure = (error) => ({
    type: GET_GAMES_FAILURE,
    payload: {
        error
    }
});

export const changeActiveTab = (tab) => ({
    type: CHANGE_ACTIVE_TAB,
    payload: {
        tab
    }
});

export const sort = () => ({
    type: SORT
});
