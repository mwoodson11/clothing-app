import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../customButton/customButton.component';
import CartItem from '../cartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cartDropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch }) => (
    <div className="cartDropdown">
        <div className="cartItems">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                ) : (
                    <span className="emptyMessage">Your cart is empty</span>
                )
            } 
        </div>
        <CustomButton onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }}>
          GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));