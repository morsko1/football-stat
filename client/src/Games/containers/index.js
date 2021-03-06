import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GamesView from '../components';
import * as thunkGames from '../thunks';
import * as actionsGames from '../actions';

class Games extends Component {
    componentDidMount() {
        console.log('Games did mount');
        this.props.init(this.props.params);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.pathname || prevProps.location.search !== this.props.search) {
            this.props.getGames(this.props.params);
        }
    }

    render() {
        return (
            <GamesView
                currentState={this.props.currentState}
                games={this.props.games}
                isGamesLoading={this.props.isGamesLoading}
                gamesLoadingError={this.props.gamesLoadingError}
                pathname={this.props.pathname}
                search={this.props.search}
                sortBy={this.props.sortBy}

                sort={this.props.sort}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentState: state.home.currentState,
        games: state.games.games,
        isGamesLoading: state.games.isGamesLoading,
        gamesLoadingError: state.games.gamesLoadingError,
        params: ownProps.match.params,
        pathname: ownProps.location.pathname,
        search: ownProps.location.search,
        sortBy: state.games.sortBy,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        init: (params) => thunkGames.init(params),
        getGames: (params) => thunkGames.getGames(params),
        sort: () => actionsGames.sort()
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Games);
