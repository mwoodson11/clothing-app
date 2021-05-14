import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIcon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cartIcon' onClick={toggleCartHidden}>
        <ShoppingIcon />
        <span className='itemCount'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);