import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  //Used to authenticate and store user info
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route 
            exact
            path='/signIn' 
            render={() => 
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
