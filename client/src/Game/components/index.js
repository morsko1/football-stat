import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';

const GameView = props => {
    return (
        <Layout>
            <div className="game">
                <div className="title">Game</div>
                <div>
                {
                    !props.isGamesLoading && props.game ?
                    <div className="game-detail">
                        <div className="date">{props.game.date}</div>
                        <div className="teams">
                            <div>
                                <Link
                                    className="link"
                                    to={`/games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}?team=${props.game.homeTeam}`}
                                >
                                    {props.game.homeTeam}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="link"
                                    to={`/games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}?team=${props.game.awayTeam}`}
                                >
                                    {props.game.awayTeam}
                                </Link>
                            </div>
                        </div>
                        <div className="result"><div>{props.game.fullTimeHomeTeamGoals}</div><div>{props.game.fullTimeAwayTeamGoals}</div></div>
                        <div className="result-half"><div>({props.game.halfTimeHomeTeamGoals})</div><div>({props.game.halfTimeAwayTeamGoals})</div></div>
                        {/* <Link to={`/game/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${props.game.id}`} className="more">More...</Link> */}
                    </div> :
                    <div className="loader"></div>
                }
                </div>
            </div>
        </Layout>
    );
}

export default GameView;
