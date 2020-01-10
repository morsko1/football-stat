import * as actionsHome from '../actions';
import * as util from '~/common/util';
import {baseUrl} from '~/common/urls';

export const init = () => (dispatch, getState) => {
    const state = getState();

    if (!state.home.championships.length) {
        dispatch(getChampionships());
    }
    const currentState = state.home.currentState;
    // set currentState.league based on country
    currentState.league = util.getLeagueByCountry(currentState.country);

    const standingsId = currentState.season + '-' + currentState.country.toLowerCase();
    currentState.standingsId = standingsId;
    dispatch(actionsHome.updateCurrentState(currentState));
    // fetch or get from state
    if (state.home.standings && standingsId in state.home.standings) {
        console.log('already loaded');
        dispatch(actionsHome.getStandingsSuccess(state.home.standings[standingsId], currentState.standingsId));
        return;
    }
    dispatch(getStandings());
};


export const getChampionships = () => (dispatch) => {
    fetch(`${baseUrl}/api/v1/championships`).then(
        response => response.json()
    ).then(data =>{
        console.log(data);
        dispatch(actionsHome.getChampionships(data.data));
        const options = {
            seasons: [],
            countries: [],
            leagues: []
        };
        // set available options
        data.data.map(item => {
            if (options.seasons.findIndex(elem => elem.season === item.season) === -1) {
                const seasonName = util.getSeasonBySeasonId(item.season);
                options.seasons.push({season: item.season, seasonName: seasonName});
            }
            if (options.countries.indexOf(item.country) === -1) {
                options.countries.push(item.country);
            }
            if (options.leagues.findIndex(elem => elem.league === item.league) === -1) {
                options.leagues.push({league: item.league, leagueName: item.leagueName});
            }
        });
        dispatch(actionsHome.setAvailableOptions(options));
    }).catch(error => {
        console.log(error);
    });
};

export const getStandings = () => (dispatch, getState) => {
    const state = getState();
    const standingsId = state.home.currentState.standingsId;
    // fetch or get from state
    if (state.home.standings && standingsId in state.home.standings) {
        console.log('already loaded');
        dispatch(actionsHome.getStandingsSuccess(state.home.standings[standingsId], standingsId));
        return;
    }
    dispatch(actionsHome.getStandings());
    const currentState = state.home.currentState;
    fetch(`${baseUrl}/api/v1/seasons/${currentState.season}/countries/${currentState.country}/leagues/${currentState.league}/standings`).then(
        response => response.json()
    ).then(data =>{
        console.log('data = ', data);
        dispatch(actionsHome.getStandingsSuccess(data.data, standingsId));
    }).catch(error => {
        dispatch(actionsHome.getStandingsFailure(error));
    });
};

export const onCountryChange = (country) => (dispatch, getState) => {
    dispatch(actionsHome.onCountryChange(country));
    const state = getState();
    const currentState = state.home.currentState;
    // set currentState.league based on country
    currentState.league = util.getLeagueByCountry(currentState.country);
    const standingsId = currentState.season + '-' + currentState.country.toLowerCase();
    currentState.standingsId = standingsId;
    dispatch(actionsHome.updateCurrentState(currentState));
    dispatch(getStandings());
};

export const onSeasonChange = (season) => (dispatch, getState) => {
    dispatch(actionsHome.onSeasonChange(season));
    const state = getState();
    const currentState = state.home.currentState;
    const standingsId = currentState.season + '-' + currentState.country.toLowerCase();
    currentState.standingsId = standingsId;
    dispatch(actionsHome.updateCurrentState(currentState));
    dispatch(getStandings());
};

export const onLeagueChange = (league) => (dispatch) => {
    dispatch(actionsHome.onLeagueChange(league));
    dispatch(getStandings());
};
