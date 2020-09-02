import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import some from 'lodash/some';

import Insights from './Routes/Insights';
import Cost from './Routes/Cost';
#import CloudManagement from './Routes/CloudManagement';
import { routes as paths } from '../package.json';

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main', 'ins-c-page__product-docs');
    root.setAttribute('role', 'main');

    return (<Route { ...rest } component={ Component } />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = (props) => {

    const path = props.childProps.location.pathname;

    return (
        <Switch>
            <InsightsRoute path={ paths.insights } component={ Insights } rootClass='insights'/>
            <InsightsRoute path={ paths.cost } component={ Cost } rootClass='cost'/>
            #<InsightsRoute path={ paths.cloudManagement } component={ CloudManagement } rootClass='cloudManagement'/>
            <Route render={ () => some(paths, p => p === path) ? null : (<Redirect to={ paths.insights }/>) }/>
        </Switch>
    );
};

Routes.propTypes = {
    childProps: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    })
};
