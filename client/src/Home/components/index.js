import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';
import StandingsTableView from './parts/standingsTable';

const HomeView = props => {
    return (
        <Layout>
            <div>
                <div>home page</div>
                {
                    props.availableOptions.countries.length ?
                        <div>
                            country:
                            <select value={props.currentState.country} onChange={props.onCountryChange}>
                            {
                                props.availableOptions.countries.map(item => {
                                    return <option key={item} value={item}>{item}</option>;
                                })
                            }
                            </select>
                            season:
                            <select value={props.currentState.season} onChange={props.onSeasonChange}>
                            {
                                props.availableOptions.seasons.map(item => {
                                    return <option key={item.season} value={item.season}>{item.seasonName}</option>;
                                })
                            }
                            </select>
                        </div> :
                        null
                }

                {
                    !props.isStandingsLoading ?
                    <div>
                        <StandingsTableView standings={props.standings[props.currentState.standingsId]}/>
                    </div> :
                    <div>loading...</div>
                }
            </div>
        </Layout>
    );
}

export default HomeView;
