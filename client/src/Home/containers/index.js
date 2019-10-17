import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeView from '../components';
import * as thunkHome from '../thunks';

class Home extends Component {
    componentDidMount() {
        console.log('Home did mount');
        this.props.init();
    }

    render() {
        return (
            <HomeView
                currentState={this.props.currentState}
                availableOptions={this.props.availableOptions}
                championships={this.props.championships}
                standings={this.props.standings}
                isStandingsLoading={this.props.isStandingsLoading}
                standingsLoadingError={this.props.standingsLoadingError}

                getChampionships={this.props.getChampionships}
                getStandings={this.props.getStandings}
                onCountryChange={this.props.onCountryChange}
                onSeasonChange={this.props.onSeasonChange}
                onLeagueChange={this.props.onLeagueChange}
            />
        );
    }
}

const mapStateToProps = state => ({
    currentState: state.home.currentState,
    availableOptions: state.home.availableOptions,
    championships: state.home.championships,
    standings: state.home.standings,
    isStandingsLoading: state.home.isStandingsLoading,
    standingsLoadingError: state.home.standingsLoadingError,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChampionships: () => thunkHome.getChampionships(),
        getStandings: () => thunkHome.getStandings(),
        onCountryChange: (e) => thunkHome.onCountryChange(e.target.value),
        onSeasonChange: (e) => thunkHome.onSeasonChange(e.target.value),
        onLeagueChange: (e) => thunkHome.onLeagueChange(e.target.value),
        init: () => thunkHome.init(),
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
