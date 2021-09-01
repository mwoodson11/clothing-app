import React, {useEffect} from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUp from './pages/signInSignUp/signInSignUp.component';
import LandingPage from './pages/landingpage/landingpage.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';
import Contact from './pages/contact/contact.component';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
      dispatch(checkUserSession());
    }, [dispatch]);

    return (
      <div>
          <GlobalStyle />
        {location.pathname !== '/' && <Header /> }
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/shop' component={Homepage} />
            <Route path='/featured' component={ShopPage} />
            <Route path='/contact' render={ () => <Contact {...currentUser} /> } />
            <Route path='/checkout' component={CheckoutPage} />
            <Route 
              exact
              path='/signIn' 
              render={() => 
                currentUser ? (
                <Redirect to='/shop' />
                ) : (
                <SignInSignUp />
                )
              }
            />
        </Switch>
      </div>
    );
}

export default App;
