import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Layout from '~/common/components/Layout/Layout.js';


const NotFoundView = props => {
    return (
        <Layout>
            <div>
                <div>not found</div>
                <Link to="/">to home</Link>
            </div>
        </Layout>
    );
}

export default NotFoundView;
