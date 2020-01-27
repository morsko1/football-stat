import * as actionsTeam from '../actions';

const initialState = {
    id: null,
    activeTab: 'games',
    isGamesLoading: false,
    gamesLoadingError: null, 
    games: [],
    summary: null,
    sortBy: 'desc'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsTeam.GET_GAMES:
            return {
                ...state,
                isGamesLoading: true,
                sortBy: 'desc'
            };

        case actionsTeam.GET_GAMES_SUCCESS:
            let games = action.payload.games && action.payload.games.slice().reverse();
            return {
                ...state,
                id: action.payload.id,
                games: games || [],
                summary: action.payload.summary,
                isGamesLoading: false
            };

        case actionsTeam.GET_GAMES_FAILURE:
            return {
                ...state,
                id: null,
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
