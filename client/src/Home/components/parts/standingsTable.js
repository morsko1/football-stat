import React from 'react';
import { Link } from 'react-router-dom';
import './standingsTable.scss';

import * as util from '~/common/util';

const StandingsTableView = props => {
    return (
        <table className="standings-table">
            <thead> 
                <tr>
                    <th>Pos.</th>
                    <th className="left">Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>Scored</th>
                    <th>Allowed</th>
                    <th>+/-</th>
                    <th>Points</th>
                    <th>Form</th>
                </tr>
            </thead>
            <tbody>
            {
                props.standings && props.standings.map((row, i) => {
                    return (
                        <tr key={i}>
                            <td className="right">{i + 1}</td>
                            <td className="left">
                                <Link
                                    className="link"
                                    to={`/games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}?team=${row.name}`}
                                >
                                    {row.name}
                                </Link>
                            </td>
                            <td>{row.games}</td>
                            <td>{row.wins}</td>
                            <td>{row.draws}</td>
                            <td>{row.losses}</td>
                            <td>{row.goalsTotal}</td>
                            <td>{row.goalsTotalAllowed}</td>
                            <td>{row.goalsTotal - row.goalsTotalAllowed}</td>
                            <td className="bold">{row.pointsTotal}</td>
                            <td>
                                <div className="form">
                                    {row.form.slice(-5).map((item, i) => <div key={i} className={util.getClassNameByGameResult(item)}>{item}</div>)}
                                </div>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default StandingsTableView;
