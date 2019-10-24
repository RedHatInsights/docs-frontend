import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProductList from '../PresentationalComponents/ProductList';
import { Insights as data } from '../Consts/Insights';

class Insights extends Component {

    render() {
        return (
            <ProductList data={ data }/>
        );
    }
}

export default withRouter(Insights);
