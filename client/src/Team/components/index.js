import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import * as util from '~/common/util';

const getGamesList = (props) => {
    let team = props.summary && props.summary.name;
    return (
        <div className="games-list">
            {
                props.games.map((item) => {
                    let gameResult;
                    switch (item.fullTimeResult) {
                        case 'H':
                            gameResult = item.homeTeam === team ? 'win' : 'lose';
                            break;
                        case 'A':
                            gameResult = item.homeTeam === team ? 'lose' : 'win';
                            break;
                        default:
                            gameResult = 'draw';
                            break;
                    }
                    return (
                        <div key={item.id} className={`game-item ${gameResult}`}>
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
    )
}

const getSummary = (props) => {
    const summary = props.summary;
    const winsWidth = (summary.wins / summary.games) * 100;
    const drawsWidth = (summary.draws / summary.games) * 100;
    const lossesWidth = (summary.losses / summary.games) * 100;

    const winsHomeWidth = (summary.winsHome / (summary.gamesHome)) * 100;
    const drawsHomeWidth = (summary.drawsHome / (summary.gamesHome)) * 100;
    const lossesHomeWidth = (summary.lossesHome / (summary.gamesHome)) * 100;

    const winsAwayWidth = (summary.winsAway / (summary.gamesAway)) * 100;
    const drawsAwayWidth = (summary.drawsAway / (summary.gamesAway)) * 100;
    const lossesAwayWidth = (summary.lossesAway / (summary.gamesAway)) * 100;

    const goalsScoredWidth = (summary.goalsTotal / (summary.goalsTotal + summary.goalsTotalAllowed)) * 100;
    const goalsAllowedWidth = (summary.goalsTotalAllowed / (summary.goalsTotal + summary.goalsTotalAllowed)) * 100;

    const goalsScoredHomeWidth = (summary.goalsHome / (summary.goalsHome + summary.goalsHomeAllowed)) * 100;
    const goalsAllowedHomeWidth = (summary.goalsHomeAllowed / (summary.goalsHome + summary.goalsHomeAllowed)) * 100;

    const goalsScoredAwayWidth = (summary.goalsAway / (summary.goalsAway + summary.goalsAwayAllowed)) * 100;
    const goalsAllowedAwayWidth = (summary.goalsAwayAllowed / (summary.goalsAway + summary.goalsAwayAllowed)) * 100;

    const shotsWidth = (summary.shots / (summary.shots + summary.shotsAllowed)) * 100;
    const shotsAllowedWidth = (summary.shotsAllowed / (summary.shots + summary.shotsAllowed)) * 100;

    const shotsOnTargetWidth = (summary.shotsOnTarget / (summary.shots + summary.shotsAllowed)) * 100;
    const shotsOnTargetAllowedWidth = (summary.shotsOnTargetAllowed / (summary.shots + summary.shotsAllowed)) * 100;

    const cornersWidth = (summary.corners / (summary.corners + summary.cornersAllowed)) * 100;
    const cornersAllowedWidth = (summary.cornersAllowed / (summary.corners + summary.cornersAllowed)) * 100;

    const foulsWidth = (summary.fouls / (summary.fouls + summary.foulsAllowed)) * 100;
    const foulsAllowedWidth = (summary.foulsAllowed / (summary.fouls + summary.foulsAllowed)) * 100;

    const yellowCardsWidth = (summary.yellowCards / (summary.yellowCards + summary.yellowCardsAllowed)) * 100;
    const yellowCardsAllowedWidth = (summary.yellowCardsAllowed / (summary.yellowCards + summary.yellowCardsAllowed)) * 100;

    const redCardsWidth = (summary.redCards / (summary.redCards + summary.redCardsAllowed)) * 100;
    const redCardsAllowedWidth = (summary.redCardsAllowed / (summary.redCards + summary.redCardsAllowed)) * 100;

    return (
        <div className="summary">
            <div className="row">
                <div className="topic">Games</div>
                <div className="line-diagram">
                    <div className="draws" style={{width: '100%'}}>{summary.games || ''}</div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="topic">Results</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: winsWidth + '%'}}>{summary.wins || ''}</div>
                    <div className="draws" style={{width: drawsWidth + '%'}}>{summary.draws || ''}</div>
                    <div className="losses" style={{width: lossesWidth + '%'}}>{summary.losses || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Home</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: winsHomeWidth + '%'}}>{summary.winsHome || ''}</div>
                    <div className="draws" style={{width: drawsHomeWidth + '%'}}>{summary.drawsHome || ''}</div>
                    <div className="losses" style={{width: lossesHomeWidth + '%'}}>{summary.lossesHome || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Away</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: winsAwayWidth + '%'}}>{summary.winsAway || ''}</div>
                    <div className="draws" style={{width: drawsAwayWidth + '%'}}>{summary.drawsAway || ''}</div>
                    <div className="losses" style={{width: lossesAwayWidth + '%'}}>{summary.lossesAway || ''}</div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="topic">Goals total</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: goalsScoredWidth + '%'}}>{summary.goalsTotal || ''}</div>
                    <div className="losses" style={{width: goalsAllowedWidth + '%'}}>{summary.goalsTotalAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Goals home</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: goalsScoredHomeWidth + '%'}}>{summary.goalsHome || ''}</div>
                    <div className="losses" style={{width: goalsAllowedHomeWidth + '%'}}>{summary.goalsHomeAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Goals away</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: goalsScoredAwayWidth + '%'}}>{summary.goalsAway || ''}</div>
                    <div className="losses" style={{width: goalsAllowedAwayWidth + '%'}}>{summary.goalsAwayAllowed || ''}</div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="topic">Shots</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: shotsWidth + '%'}}>{summary.shots || ''}</div>
                    <div className="losses" style={{width: shotsAllowedWidth + '%'}}>{summary.shotsAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">On target</div>
                <div className="line-diagram-splitted">
                    <div className="goals-scored" style={{width: shotsOnTargetWidth + '%'}}>{summary.shotsOnTarget || ''}</div>
                    <div className="goals-empty" style={{width: (100 - shotsOnTargetWidth - shotsOnTargetAllowedWidth) + '%'}}>{summary.shotsOnTarget || ''}</div>
                    <div className="goals-allowed" style={{width: shotsOnTargetAllowedWidth + '%'}}>{summary.shotsOnTargetAllowed || ''}</div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="topic">Corners</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: cornersWidth + '%'}}>{summary.corners || ''}</div>
                    <div className="losses" style={{width: cornersAllowedWidth + '%'}}>{summary.cornersAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Fouls</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: foulsWidth + '%'}}>{summary.fouls || ''}</div>
                    <div className="losses" style={{width: foulsAllowedWidth + '%'}}>{summary.foulsAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Yellow cards</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: yellowCardsWidth + '%'}}>{summary.yellowCards || ''}</div>
                    <div className="losses" style={{width: yellowCardsAllowedWidth + '%'}}>{summary.yellowCardsAllowed || ''}</div>
                </div>
            </div>
            <div className="row">
                <div className="topic">Red cards</div>
                <div className="line-diagram">
                    <div className="wins" style={{width: redCardsWidth + '%'}}>{summary.redCards || ''}</div>
                    <div className="losses" style={{width: redCardsAllowedWidth + '%'}}>{summary.redCardsAllowed || ''}</div>
                </div>
            </div>
        </div>
    );
}

const getSortElement = props => {
    return (
        <div className="sort">
            <div className="sort-inner" onClick={props.sort}>
                <span className="sort-icon">
                    {props.sortBy === 'asc' ? '\u25B2' : '\u25BC'}
                </span>
                <span className="sort-text">{props.sortBy === 'asc' ? 'new first' : 'old first'}</span>
            </div>
        </div>
    );
};

const TeamView = props => {
    const getTabContent = () => {
        switch(props.activeTab) {
            case 'games':
                return (<div>
                    {getSortElement(props)}
                    {getGamesList(props)}
                </div>);
            case 'summary':
                return getSummary(props);
            default:
                return (<div>
                    {getSortElement(props)}
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
                        {props.currentState.team && <div className="team-name">{props.currentState.team}</div>}
                        {props.currentState.team && (
                            <img
                                src={`/assets/${props.currentState.league}/${props.currentState.team}.png`}
                                alt=""
                                className="logo-img"
                                onError={(e)=>{e.target.onerror = null;e.target.style.display='none'}}
                            />
                        )}
                    </div>
                    <div className="tabs">
                        <div
                            className={`tab ${props.activeTab === 'games' ? 'active' : ''}`}
                            onClick={() => props.changeActiveTab('games')}
                        >
                            Games
                        </div>
                        <div
                            className={`tab ${props.activeTab === 'summary' ? 'active' : ''}`}
                            onClick={() => props.changeActiveTab('summary')}
                        >
                            Summary
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
