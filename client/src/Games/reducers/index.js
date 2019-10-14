import * as actionsGames from '../actions';

const initialState = {
    isGamesLoading: false,
    gamesLoadingError: null, 
    games: []
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
                games: action.payload.data,
                isGamesLoading: false
            };

        case actionsGames.GET_GAMES_FAILURE:
            return {
                ...state,
                isGamesLoading: false,
                gamesLoadingError: action.payload.error
            };

        default:
            return state;
    }
};
