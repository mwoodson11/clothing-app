import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIcon.styles.scss';

const CartIcon = () => (
    <div className='cartIcon'>
        <ShoppingIcon />
        <span className='itemCount'>0</span>
    </div>
);

export default CartIcon;