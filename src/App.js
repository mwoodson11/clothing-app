import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

import { setCurrentUser } from './redux/user/user.action';

class  App extends React.Component {

  unsubscribeFromAuth = null;

  //Used to authenticate and store user info
  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          });
        });
      }
      
     setCurrentUser(userAuth);
    });
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
