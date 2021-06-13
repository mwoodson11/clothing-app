import React from 'react';

import CollectionPreview from '../collectionPreview/collectionPreview.component';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collectionsOverview'>
  {
      collections.map(({id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
      ))
  }
</div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);