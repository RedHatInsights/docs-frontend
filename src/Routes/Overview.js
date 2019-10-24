import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import CloudManagement from './CloudManagement';
import Insights from './Insights';

import './overview.scss';

class Overview extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Product Documentation'/>
                </PageHeader>
                <Main>
                    <CloudManagement/>
                    <Insights/>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(Overview);
