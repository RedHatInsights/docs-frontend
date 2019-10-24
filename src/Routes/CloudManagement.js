import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProductList from '../PresentationalComponents/ProductList';
import { CloudManagement as data } from '../Consts/CloudManagement';

class CloudManagement extends Component {

    render() {
        return (
            <ProductList data={ data }/>
        );
    }
}

export default withRouter(CloudManagement);
