import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


const NotFoundView = props => {
    return (
        <div>
            <div>not found</div>
            <Link to="/">to home</Link>
        </div>
    );
}

export default NotFoundView;
