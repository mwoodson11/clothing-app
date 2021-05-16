import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/customButton.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collectionItem'>
        <div className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collectionFooter'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> 
          Add to Cart 
        </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);