import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import ProductList from '../PresentationalComponents/ProductList';
import { Insights as data } from '../Consts/Insights';

class Insights extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Product Documentation for Red Hat Insights'/>
                </PageHeader>
                <Main>
                    <ProductList data={ data }/>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(Insights);
