import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HeaderView from './component.js';

class Header extends Component {
    render() {
        return (
            <HeaderView
                pathname={this.props.pathname}
                currentState={this.props.currentState}
            />
        );
    }
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    currentState: state.home.currentState
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
