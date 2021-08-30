import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/cartDropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, StyledDiv } from './header.styles';
import { useLocation } from 'react-router-dom';

const Header = ({ currentUser, hidden, signOutStart }) => {
    const [selected, setSelected] = useState(0);
    const location = useLocation();
    useEffect(() => {
        const handleSelected = () => {
            console.log("Match:", location);
            if (location.pathname.includes("featured")) {
                setSelected(0);
            } else if (location.pathname.includes("shop")) {
                setSelected(1);
            } else if (location.pathname.includes("contact")) {
                setSelected(2);
            } else if (location.pathname.includes("signIn")) {
                setSelected(2);
            } else {
                setSelected(undefined)
            }
        }
        handleSelected();
      }, [location]);

    return (
        <HeaderContainer>
            <LogoContainer to="/shop">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className={`${selected === 0 ? "selected" : ""}`} to="/featured">
                    <StyledDiv>FEATURED</StyledDiv>
                </OptionLink>
                <OptionLink className={`${selected === 1 ? "selected" : ""}`} to="/shop">
                    <StyledDiv>SHOP</StyledDiv>
                </OptionLink>
                <OptionLink className={`${selected === 2 ? "selected" : ""}`} to="/contact">
                    <StyledDiv>CONTACT</StyledDiv>
                </OptionLink>
            
                {
                    currentUser ? (
                    <OptionLink as='div' onClick={signOutStart}>
                        <StyledDiv>SIGN OUT</StyledDiv>
                    </OptionLink>
                    ) : (
                    <OptionLink className={`${selected === 3 ? "selected" : ""} option`} to="/signIn">
                        <StyledDiv>SIGN IN</StyledDiv>
                    </OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown /> }
        </HeaderContainer>
    )
};

//createStructuredSelector grabs the state and places it into selectors
//good when there are multiple selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);