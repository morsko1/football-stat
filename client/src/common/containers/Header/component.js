import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const HeaderView = props => {
    return (
        <div className="header">
            <div className="title">Football Stat</div>
            <div className="navigation">
                <Link className={`link ${props.pathname === '/' ? 'active' : ''}`} to="/">Standings</Link>
                <Link className={`link ${props.pathname === '/test' ? 'active' : ''}`} to="/test">Test</Link>
            </div>
        </div>
    );
}

export default HeaderView;
