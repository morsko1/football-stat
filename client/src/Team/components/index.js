import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import * as util from '~/common/util';

const getGamesList = (props) => {
    return (
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
                                        to={`/team/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${item.homeTeam}`}
                                    >
                                        {item.homeTeam}
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="link"
                                        to={`/team/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}/${item.awayTeam}`}
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
    )
}

const getSummary = (props) => {
    return (
        <div className="summary">summary</div>
    )
}

const TeamView = props => {
    const getTabContent = () => {
        switch(props.activeTab) {
            case 'games':
                return (<div>
                    <div className="sort">
                        <button onClick={props.sort}>{props.sortBy === 'asc' ? 'new first' : 'old first'}</button>
                    </div>
                    {getGamesList(props)}
                </div>);
            case 'summary':
                return getSummary(props);
            default:
                return (<div>
                    <div className="sort">
                        <button onClick={props.sort}>{props.sortBy === 'asc' ? 'new first' : 'old first'}</button>
                    </div>
                    {getGamesList(props)}
                </div>);
        }
    };
    return (
        <Layout>
            <div className="team">
                <div className="title">Team</div>
                <div>
                {
                    !props.isGamesLoading ?
                    <div>
                    <div className="info">
                        <div>{util.getLeagueNameById(props.currentState.league)} {util.getSeasonBySeasonId(props.currentState.season)}</div>
                        {props.currentState.team && <div>{props.currentState.team}</div>}
                    </div>
                    <div className="tabs">
                        <div
                            className={`tab ${props.activeTab === 'games' ? 'active' : ''}`}
                            onClick={() => props.changeActiveTab('games')}
                        >
                            games
                        </div>
                        <div
                            className={`tab ${props.activeTab === 'summary' ? 'active' : ''}`}
                            onClick={() => props.changeActiveTab('summary')}
                        >
                            summary
                        </div>
                    </div>
                    {
                        getTabContent()
                    }
                    </div> :
                    <div className="loader"></div>
                }
                </div>
            </div>
        </Layout>
    );
}

export default TeamView;
