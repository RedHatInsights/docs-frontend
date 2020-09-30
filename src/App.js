import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NotificationsPortal } from '@redhat-cloud-services/frontend-components-notifications/';
import { Routes } from './Routes';
import './App.scss';

class App extends Component {

    componentDidMount () {
        insights.chrome.init();
        insights.chrome.identifyApp('product');
        this.appNav = insights.chrome.on('APP_NAVIGATION', event => this.props.history.push(`/${event.navId}`));

    }

    componentWillUnmount () {
        this.appNav();
    }

    render () {
        return (
            <React.Fragment>
                <NotificationsPortal />
                <Routes childProps={ this.props } />
            </React.Fragment>
        );
    }
}

App.propTypes = {
    history: PropTypes.object
};

export default withRouter (connect()(App));
