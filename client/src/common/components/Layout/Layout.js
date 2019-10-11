import React, {Component} from 'react';
import './Layout.scss';
import Header from '../../containers/Header';

const Layout = ({children}) => (
    <div className={'layout-container'}>
        <Header />
        {children}
    </div>
);

export default Layout;
