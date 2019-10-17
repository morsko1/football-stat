import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import * as util from '~/common/util';

const GamesView = props => {
    return (
        <Layout>
            <div className="games">
                <div className="title">Games</div>
                <div>
                {
                    !props.isGamesLoading ?
                    <div>
                    <div className="info">
                        <div>{util.getLeagueNameById(props.currentState.league)} {util.getSeasonBySeasonId(props.currentState.season)}</div>
                        {props.currentState.team && <div>{props.currentState.team}</div>}
                    </div>
                    <div className="games-list">
                        {
                            props.games.map((item) => {
                                return (
                                    <div key={item.id} className="game-item">
                                        <div className="date">{item.date}</div>
                                        <div className="teams">
                                            <div>
                                                <Link
                                                    className="link"
                                                    to={`${props.pathname}?team=${item.homeTeam}`}
                                                >
                                                    {item.homeTeam}
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    className="link"
                                                    to={`${props.pathname}?team=${item.awayTeam}`}
                                                >
                                                    {item.awayTeam}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="result"><div>{item.fullTimeHomeTeamGoals}</div><div>{item.fullTimeAwayTeamGoals}</div></div>
                                        <Link to={`/game/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${item.id}`} className="more">More...</Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    </div> :
                    <div className="loader"></div>
                }
                </div>
            </div>
        </Layout>
    );
}

export default GamesView;
