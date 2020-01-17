import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TeamView from '../components';
import * as thunkTeam from '../thunks';
import * as actionsTeam from '../actions';

class Team extends Component {
    componentDidMount() {
        console.log('Team did mount');
        this.props.init(this.props.params);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.pathname) {
            this.props.getGames(this.props.params);
        }
    }

    render() {
        return (
            <TeamView
                activeTab={this.props.activeTab}
                currentState={this.props.currentState}
                games={this.props.games}
                isGamesLoading={this.props.isGamesLoading}
                gamesLoadingError={this.props.gamesLoadingError}
                pathname={this.props.pathname}
                sortBy={this.props.sortBy}
                summary={this.props.summary}

                changeActiveTab={this.props.changeActiveTab}
                sort={this.props.sort}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        activeTab: state.team.activeTab,
        currentState: state.home.currentState,
        games: state.team.games,
        isGamesLoading: state.team.isGamesLoading,
        gamesLoadingError: state.team.gamesLoadingError,
        params: ownProps.match.params,
        pathname: ownProps.location.pathname,
        sortBy: state.team.sortBy,
        summary: state.team.summary,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        init: (params) => thunkTeam.init(params),
        getGames: (params) => thunkTeam.getGames(params),
        changeActiveTab: (tab) => actionsTeam.changeActiveTab(tab),
        sort: () => actionsTeam.sort()
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
