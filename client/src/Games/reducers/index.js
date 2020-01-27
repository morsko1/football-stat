import * as actionsGames from '../actions';

const initialState = {
    id: null,
    isGamesLoading: false,
    gamesLoadingError: null, 
    games: [],
    sortBy: 'desc'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsGames.GET_GAMES:
            return {
                ...state,
                isGamesLoading: true
            };

        case actionsGames.GET_GAMES_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                games: action.payload.data.slice().reverse(),
                isGamesLoading: false
            };

        case actionsGames.GET_GAMES_FAILURE:
            return {
                ...state,
                id: null,
                isGamesLoading: false,
                gamesLoadingError: action.payload.error
            };

        case actionsGames.SORT:
            return {
                ...state,
                sortBy: state.sortBy === 'asc' ? 'desc' : 'asc',
                games: state.games.slice().reverse()
            };

        default:
            return state;
    }
};
