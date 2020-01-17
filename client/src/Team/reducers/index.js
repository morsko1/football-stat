import * as actionsTeam from '../actions';

const initialState = {
    activeTab: 'games',
    isGamesLoading: false,
    gamesLoadingError: null, 
    games: [],
    summary: null,
    sortBy: 'asc'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsTeam.GET_GAMES:
            return {
                ...state,
                isGamesLoading: true,
                sortBy: 'asc'
            };

        case actionsTeam.GET_GAMES_SUCCESS:
            return {
                ...state,
                games: action.payload.games,
                summary: action.payload.summary,
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

        case actionsTeam.SORT:
            return {
                ...state,
                sortBy: state.sortBy === 'asc' ? 'desc' : 'asc',
                games: state.games.slice().reverse()
            };
    

        default:
            return state;
    }
};
