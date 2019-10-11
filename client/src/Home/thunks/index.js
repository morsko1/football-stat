import * as actionsHome from '../actions';
import * as util from '~/common/util';

export const changeTest = () => (dispatch) => {
    dispatch(actionsHome.changeTest());
};

export const getChampionships = () => (dispatch) => {
    fetch(`/api/v1/championships`).then(
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
                const seasonName = `20${item.season.slice(0, 2)}/20${item.season.slice(2)}`;
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
    const params = state.home.currentState;
    // set params.league based on country
    params.league = util.getLeagueByCountry(params.country);

    const standingsId = params.season + '-' + params.country.toLowerCase();
    params.standingsId = standingsId;
    dispatch(actionsHome.updateCurrentState(params));
    // if standings for current params is already loaded
    if (state.home.standings && standingsId in state.home.standings) {
        console.log('already loaded');
        return;
    }
    // fetch or get from state
    dispatch(actionsHome.getStandings());
    fetch(`/api/v1/seasons/${params.season}/countries/${params.country}/leagues/${params.league}/standings`).then(
        response => response.json()
    ).then(data =>{
        console.log('data = ', data);
        dispatch(actionsHome.getStandingsSuccess(data.data, standingsId));
    }).catch(error => {
        dispatch(actionsHome.getStandingsFailure(error));
    });
};

export const onCountryChange = (country) => (dispatch) => {
    dispatch(actionsHome.onCountryChange(country));
    dispatch(getStandings());
};

export const onSeasonChange = (season) => (dispatch) => {
    dispatch(actionsHome.onSeasonChange(season));
    dispatch(getStandings());
};

export const onLeagueChange = (league) => (dispatch) => {
    dispatch(actionsHome.onLeagueChange(league));
    dispatch(getStandings());
};
