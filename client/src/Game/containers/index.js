import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GameView from '../components';
import * as thunkGame from '../thunks';

class Game extends Component {
    componentDidMount() {
        console.log('Game did mount');
        this.props.init(this.props.params);
    }

    render() {
        return (
            <GameView
                currentState={this.props.currentState}
                isGameLoading={this.props.isGameLoading}
                gameLoadingError={this.props.gameLoadingError}
                game={this.props.game}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentState: state.home.currentState,
        game: state.game.game,
        isGameLoading: state.game.isGameLoading,
        gameLoadingError: state.game.gameLoadingError,
        params: ownProps.match.params,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        init: (params) => thunkGame.init(params)
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
