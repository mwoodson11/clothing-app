import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';
import StripeCheckoutButton from '../../components/stipeButton/stripeButton.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkoutPage">
        <div className="checkoutHeader">
            <div className="headerBlock">
                <span>Product</span>
            </div>
            <div className="headerBlock">
                <span>Description</span>
            </div>
            <div className="headerBlock">
                <span>Quantity</span>
            </div>
            <div className="headerBlock">
                <span>Price</span>
            </div>
            <div className="headerBlock">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
        {total > 0 && 
        <>
            <div className="testWarning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);