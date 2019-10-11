import React from 'react';
import './standingsTable.scss';

const StandingsTableView = props => {
    return (
        <div>
           <table className="standings-table">
               <thead> 
                   <tr>
                       <th>Pos.</th>
                       <th>Club</th>
                       <th>Played</th>
                       <th>Won</th>
                       <th>Drawn</th>
                       <th>Lost</th>
                       <th>Scored</th>
                       <th>Allowed</th>
                       <th>+/-</th>
                       <th>Points</th>
                       {/* <th>Form</th> */}
                   </tr>
               </thead>
               <tbody>
                {
                    props.standings && props.standings.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{row.name}</td>
                                <td>{row.games}</td>
                                <td>{row.wins}</td>
                                <td>{row.draws}</td>
                                <td>{row.losses}</td>
                                <td>{row.goalsTotal}</td>
                                <td>{row.goalsTotalAllowed}</td>
                                <td>{row.goalsTotal - row.goalsTotalAllowed}</td>
                                <td>{row.pointsTotal}</td>
                                {/* <td>form</td> */}
                            </tr>
                        );
                    })
                }
               </tbody>
           </table>
        </div>
    );
}

export default StandingsTableView;
