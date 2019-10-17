import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import * as util from '~/common/util';

const GameView = props => {
    return (
        <Layout>
            <div className="game">
                <div className="title">Game</div>
                <div>
                {
                    !props.isGameLoading && props.game ?
                    <div className="game-detail">
                        <div className="info">
                            <div>{util.getLeagueNameById(props.currentState.league)} {util.getSeasonBySeasonId(props.currentState.season)}</div>
                            {props.currentState.team && <div>{props.currentState.team}</div>}
                        </div>
                        <div className="date">{props.game.date}</div>
                        <div className="teams">
                            <div className="team">
                                <Link
                                    className="link"
                                    to={`/games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}?team=${props.game.homeTeam}`}
                                >
                                    {props.game.homeTeam}
                                </Link>
                            </div>
                            <div className="middle"></div>
                            <div className="team">
                                <Link
                                    className="link"
                                    to={`/games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}?team=${props.game.awayTeam}`}
                                >
                                    {props.game.awayTeam}
                                </Link>
                            </div>
                        </div>
                        <div className="result">
                            <div className="team">{props.game.fullTimeHomeTeamGoals}</div>
                            <div className="middle"></div>
                            <div className="team">{props.game.fullTimeAwayTeamGoals}</div>
                        </div>
                        <div className="result-half">
                            <div className="team">({props.game.halfTimeHomeTeamGoals})</div>
                            <div className="middle"></div>
                            <div className="team">({props.game.halfTimeAwayTeamGoals})</div>
                        </div>
                        <div className="stat">
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamShots}</div>
                                <div className="middle">shots</div>
                                <div className="team">{props.game.awayTeamShots}</div>
                            </div>
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamShotsOnTarget}</div>
                                <div className="middle">shots on target</div>
                                <div className="team">{props.game.awayTeamShotsOnTarget}</div>
                            </div>
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamCorners}</div>
                                <div className="middle">corners</div>
                                <div className="team">{props.game.awayTeamCorners}</div>
                            </div>
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamFouls}</div>
                                <div className="middle">fouls</div>
                                <div className="team">{props.game.awayTeamFouls}</div>
                            </div>
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamYellowCards}</div>
                                <div className="middle">yellow cards</div>
                                <div className="team">{props.game.awayTeamYellowCards}</div>
                            </div>
                            <div className="stat-line">
                                <div className="team">{props.game.homeTeamRedCards}</div>
                                <div className="middle">red cards</div>
                                <div className="team">{props.game.awayTeamRedCards}</div>
                            </div>
                        </div>
                    </div> :
                    <div className="loader"></div>
                }
                </div>
            </div>
        </Layout>
    );
}

export default GameView;
