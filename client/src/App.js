import React, {useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';
import LandingPage from './pages/landingpage/landingpage.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';
import Contact from './pages/contact/contact.component';

const App = ({checkUserSession, currentUser, location}) => {
    useEffect(() => {
      checkUserSession()
    }, [checkUserSession]);

    return (
      <div>
        {location.pathname !== '/' && <Header /> }
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' render={ () => <Contact {...currentUser} /> } />
            <Route path='/checkout' component={CheckoutPage} />
            <Route 
              exact
              path='/signIn' 
              render={() => 
                currentUser ? (
                <Redirect to='/home' />
                ) : (
                <SignInSignUp />
                )
              }
            />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
