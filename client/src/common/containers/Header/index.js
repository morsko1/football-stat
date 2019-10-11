import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HeaderView from './component.js';

class Header extends Component {
    render() {
        return (
            <HeaderView/>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
