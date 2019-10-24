import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, Stack, StackItem, Title } from '@patternfly/react-core';

import './product-list.scss';

class ProductList extends Component {

    render() {
        const { data } = this.props;

        return (
            <Card>
                <CardHeader> { data.title } { data.version } </CardHeader>
                <CardBody>
                    <Stack gutter='lg'>
                        { Object.entries(data.sections).map(([ name, info ]) => (
                            <StackItem key={ name } className='ins-c-product-doc__info'>
                                <Title headingLevel='h6' size='md' className='ins-c-product-doc__info--name'> { name } </Title>
                                <Stack gutter='md'>
                                    { info.map((section) => (
                                        <StackItem key={ section.title }>
                                            <dl>
                                                <dt><a href={ section.url }> { section.title } </a></dt>
                                                { section.description && <dd> { section.description } </dd> }
                                            </dl>
                                        </StackItem>
                                    )) }
                                </Stack>
                            </StackItem>
                        )) }
                    </Stack>
                </CardBody>
            </Card>
        );
    }
}

ProductList.propTypes = {
    data: PropTypes.any
};

export default withRouter(ProductList);
