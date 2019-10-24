import * as actionsTeam from '../actions';

const initialState = {
    activeTab: 'games',
    isGamesLoading: false,
    gamesLoadingError: null, 
    games: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsTeam.GET_GAMES:
            return {
                ...state,
                isGamesLoading: true
            };

        case actionsTeam.GET_GAMES_SUCCESS:
            return {
                ...state,
                games: action.payload.data,
                isGamesLoading: false
            };

        case actionsTeam.GET_GAMES_FAILURE:
            return {
                ...state,
                isGamesLoading: false,
                gamesLoadingError: action.payload.error
            };

        case actionsTeam.CHANGE_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload.tab
            };

        default:
            return state;
    }
};
