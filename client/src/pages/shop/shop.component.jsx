import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverview.container';
import CollectionsPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
      fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='shopPage'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);