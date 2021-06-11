import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import WithSpinner from '../../components/withSpinner/withSpinner.component';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverview.container';
import CollectionsPageContainer from '../collection/collection.container';

// const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    console.log("Props:", this.props)
    const { match } = this.props;
    return (
        <div className='shopPage'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);