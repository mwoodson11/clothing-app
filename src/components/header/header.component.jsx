import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <div className="logoContainer">
            <Link className='logoLink' to="/">
                <Logo className='logo' />
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
        
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className='option' to="/signIn">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
)

//createStructuredSelector grabs the state and places it into selectors
//good when there are multiple selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);