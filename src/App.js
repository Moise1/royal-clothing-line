import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import { Home } from './components/Home';
import { Shop } from './pages/shop/shop';
import { Header } from './components/header/Header';
import { Login } from './components/user-auth/Login';
import { Signup } from './components/user-auth/Signup';
import { auth } from './firebase/firebase';
import { Switch, Route } from 'react-router-dom';
import { createUserProfileDoc } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/users';

export const App = () => {
  const dispatch = useDispatch();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }))
        });
      }
     dispatch(setCurrentUser(userAuth));
    });
  }, []);

  useEffect(() => {
    unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
