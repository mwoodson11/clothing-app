import React from 'react';

import CustomButton from '../customButton/customButton.component';

import './cartDropdown.styles.scss';

const CartDropdown = () => (
    <div className="cartDropdown">
        <div className="cartItems">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default CartDropdown;