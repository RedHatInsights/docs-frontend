import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import ProductList from '../PresentationalComponents/ProductList';
import { Cost as data } from '../Consts/Cost';

class Cost extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Documentation for Cost Management'/>
                </PageHeader>
                <Main>
                    <ProductList data={ data }/>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(Cost);
