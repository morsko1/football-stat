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
                    <div className="sort">
                        <button onClick={props.sort}>{props.sortBy === 'asc' ? 'new first' : 'old first'}</button>
                    </div>
                    <div className="games-list">
                        {
                            props.games.map((item) => {
                                return (
                                    <div key={item.id} className="game-item">
                                        <div className="date">{item.date}</div>
                                        <div className="teams">
                                            <div className="team-home">
                                                <Link
                                                    className="link link-home"
                                                    to={`/team/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${item.homeTeam}`}
                                                >
                                                    {item.homeTeam}
                                                </Link>
                                                <img className="logo-img" src={`/assets/${props.currentState.league}/${item.homeTeam}.png`} alt="" onError={(e)=>{e.target.onerror = null;e.target.style.display='none'}}></img>
                                                <div className="team-home-goals">{item.fullTimeHomeTeamGoals}</div>
                                            </div>
                                            <div className="team-away">
                                                <div className="team-away-goals">{item.fullTimeAwayTeamGoals}</div>
                                                <img className="logo-img" src={`/assets/${props.currentState.league}/${item.awayTeam}.png`} alt="" onError={(e)=>{e.target.onerror = null;e.target.style.display='none'}}></img>
                                                <Link
                                                    className="link link-away"
                                                    to={`/team/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${item.awayTeam}`}
                                                >
                                                    {item.awayTeam}
                                                </Link>
                                            </div>
                                        </div>
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
