import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NotFoundView from '../components';

class NotFound extends Component {

    componentDidMount() {
        console.log('NotFound did mount');
    }

    render() {
        return (
            <NotFoundView />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
