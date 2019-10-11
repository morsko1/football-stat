export const CHANGE_TEST = 'home/CHANGE_TEST';
export const GET_CHAMPIONSHIPS = 'home/GET_CHAMPIONSHIPS';
export const GET_STANDINGS = 'home/GET_STANDINGS';
export const GET_STANDINGS_SUCCESS = 'home/GET_STANDINGS_SUCCESS';
export const GET_STANDINGS_FAILURE = 'home/GET_STANDINGS_FAILURE';
export const SET_AVAILABLE_OPTIONS = 'home/SET_AVAILABLE_OPTIONS';
export const ON_COUNTRY_CHANGE = 'home/ON_COUNTRY_CHANGE';
export const ON_SEASON_CHANGE = 'home/ON_SEASON_CHANGE';
export const ON_LEAGUE_CHANGE = 'home/ON_LEAGUE_CHANGE';
export const UPDATE_CURRENT_STATE = 'home/UPDATE_CURRENT_STATE';

export const changeTest = () => ({
    type: CHANGE_TEST
});

export const getChampionships = (data) => ({
    type: GET_CHAMPIONSHIPS,
    payload: {
        data
    }
});

export const getStandings = () => ({
    type: GET_STANDINGS
});

export const getStandingsSuccess = (data, standingsId) => ({
    type: GET_STANDINGS_SUCCESS,
    payload: {
        data,
        standingsId
    }
});

export const getStandingsFailure = (error) => ({
    type: GET_STANDINGS_FAILURE,
    payload: {
        error
    }
});

export const setAvailableOptions = (availableOptions) => ({
    type: SET_AVAILABLE_OPTIONS,
    payload: {
        availableOptions
    }
});

export const onCountryChange = (country) => ({
    type: ON_COUNTRY_CHANGE,
    payload: {
        country
    }
});

export const onSeasonChange = (season) => ({
    type: ON_SEASON_CHANGE,
    payload: {
        season
    }
});

export const onLeagueChange = (league) => ({
    type: ON_LEAGUE_CHANGE,
    payload: {
        league
    }
});

export const updateCurrentState = (params) => ({
    type: UPDATE_CURRENT_STATE,
    payload: {
        params
    }
});
