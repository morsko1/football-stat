import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';

const GamesView = props => {
    return (
        <Layout>
            <div className="games">
                <div className="title">Games</div>
                <div>
                {
                    !props.isGamesLoading ?
                    <div className="games-list">
                        {
                            props.games.map((item) => {
                                return (
                                    <div key={item.id} className="game">
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
                                        {/* <Link to="/" className="more">More...</Link> */}
                                    </div>
                                );
                            })
                        }
                    </div> :
                    <div className="loader"></div>
                }
                </div>
            </div>
        </Layout>
    );
}

export default GamesView;
