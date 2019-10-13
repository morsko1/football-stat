import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import StandingsTableView from './parts/standingsTable';

const HomeView = props => {
    return (
        <Layout>
            <div className="standings">
                <div className="title">Standings</div>
                {
                    props.availableOptions.countries.length ?
                        <div className="controls">
                            <div className="controls__country">
                            country: 
                            <select value={props.currentState.country} onChange={props.onCountryChange}>
                            {
                                props.availableOptions.countries.map(item => {
                                    return <option key={item} value={item}>{item}</option>;
                                })
                            }
                            </select>
                            </div>
                            <div className="controls__season">
                            season: 
                            <select value={props.currentState.season} onChange={props.onSeasonChange}>
                            {
                                props.availableOptions.seasons.map(item => {
                                    return <option key={item.season} value={item.season}>{item.seasonName}</option>;
                                })
                            }
                            </select>
                            </div>
                        </div> :
                        null
                }

                {
                    !props.isStandingsLoading ?
                    <div className="standings__table-container">
                        <StandingsTableView standings={props.standings[props.currentState.standingsId]}/>
                    </div> :
                    <div className="loader"></div>
                }
            </div>
        </Layout>
    );
}

export default HomeView;
