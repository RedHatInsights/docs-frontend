import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import ProductList from '../PresentationalComponents/ProductList';
import { SubWatch as data } from '../Consts/SubWatch';

class SubWatch extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Documentation for Subscription Watch'/>
                </PageHeader>
                <Main>
                    <ProductList data={ data }/>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(SubWatch);
