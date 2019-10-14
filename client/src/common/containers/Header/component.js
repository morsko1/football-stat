import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const HeaderView = props => {
    return (
        <div className="header">
            <div className="title">Football Stat</div>
            <div className="navigation">
                <Link className={`link ${props.pathname === '/' ? 'active' : ''}`} to="/">Standings</Link>
                <Link
                    className={`link ${props.pathname.indexOf('/games') != -1 ? 'active' : ''}`}
                    to={`games/${props.currentState.season}/${props.currentState.country}/${props.currentState.league}`}
                >
                    Games
                </Link>
            </div>
        </div>
    );
}

export default HeaderView;
