import React from 'react';

import CustomButton from '../customButton/customButton.component';

import './cartDropdown.styles.scss';

const Cart = () => (
    <div className="cartDropdown">
        <div className="cartItems">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default Cart;