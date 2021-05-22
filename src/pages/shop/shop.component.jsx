import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component';
import CollectionsPage from '../collection/collection.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ match })  => (
    <div className='shopPage'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);