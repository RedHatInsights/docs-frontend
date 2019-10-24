import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import ProductList from '../PresentationalComponents/ProductList';
import { CloudManagement as data } from '../Consts/CloudManagement';

class CloudManagement extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Product Documentation for Red Hat Cloud Management Services'/>
                </PageHeader>
                <Main>
                    <ProductList data={ data }/>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(CloudManagement);
