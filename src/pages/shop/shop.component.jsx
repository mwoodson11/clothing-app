import React from 'react';
import {connect} from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/spinner/spinner.component';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component';
import CollectionsPage from '../collection/collection.component';

// import { selectCollections } from '../../redux/shop/shop.selectors';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionsPageWithSpinner = Spinner(CollectionsPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })


  }

  render() {
    console.log("Props:", this.props)
    const { match } = this.props;
    const { loading } = this.state;
    return (
        <div className='shopPage'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// });

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);