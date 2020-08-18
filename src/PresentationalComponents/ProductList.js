import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, Stack, StackItem } from '@patternfly/react-core';

import './product-list.scss';

class ProductList extends Component {

    render() {
        const { data } = this.props;

        return (
            <React.Fragment>
                { Object.entries(data.sections).map(([ name, info ]) => (
                    <Card className='ins-c-product-documentation__card' key= { name }>
                        <CardHeader className='ins-c-product-doc__info'> { name } </CardHeader>
                        <CardBody>
                            <Stack hasGutter>
                                { info.map((section) => (
                                    <StackItem key={ section.title }>
                                        <dl>
                                            <dt><a href={ section.url }> { section.title } </a></dt>
                                            { section.description && <dd> { section.description } </dd> }
                                        </dl>
                                    </StackItem>
                                )) }
                            </Stack>
                        </CardBody>
                    </Card>
                )) }
            </React.Fragment>
        );
    }
}

ProductList.propTypes = {
    data: PropTypes.any
};

export default withRouter(ProductList);
