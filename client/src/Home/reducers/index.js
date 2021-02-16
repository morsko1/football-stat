import * as actionsHome from '../actions';

const initialState = {
    championships: [],
    isStandingsLoading: false,
    standingsLoadingError: null, 
    standings: {},
    currentState: {
        season: '2021',
        country: 'England',
        league: 'E0',
        standingsId: '2021-england'
    },
    availableOptions: {
        seasons: [],
        countries: [],
        leagues: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsHome.GET_CHAMPIONSHIPS:
            return {
                ...state,
                championships: action.payload.data
            };

        case actionsHome.GET_STANDINGS:
            return {
                ...state,
                isStandingsLoading: true
            };

        case actionsHome.GET_STANDINGS_SUCCESS:
            return {
                ...state,
                standings: {
                    ...state.standings,
                    [action.payload.standingsId]: action.payload.data
                },
                currentState: {
                    ...state.currentState,
                    standingsId: action.payload.standingsId
                },
                isStandingsLoading: false
            };

        case actionsHome.GET_STANDINGS_FAILURE:
            return {
                ...state,
                isStandingsLoading: false,
                standingsLoadingError: action.payload.error
            };

        case actionsHome.SET_AVAILABLE_OPTIONS:
            return {
                ...state,
                availableOptions: action.payload.availableOptions
            };

        case actionsHome.ON_COUNTRY_CHANGE:
            return {
                ...state,
                currentState: {
                    ...state.currentState,
                    country: action.payload.country
                }
            };

        case actionsHome.ON_SEASON_CHANGE:
            return {
                ...state,
                currentState: {
                    ...state.currentState,
                    season: action.payload.season
                }
            };

        case actionsHome.ON_LEAGUE_CHANGE:
            return {
                ...state,
                currentState: {
                    ...state.currentState,
                    league: action.payload.league
                }
            };

        case actionsHome.UPDATE_CURRENT_STATE:
            return {
                ...state,
                currentState: action.payload.params
            };

        default:
            return state;
    }
};
