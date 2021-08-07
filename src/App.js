import { useState, useEffect } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Shop } from './pages/shop/shop';
import { Header } from './components/header/Header';
import { Login } from './components/user-auth/Login';
import { Signup } from './components/user-auth/Signup';
import { auth } from './firebase/firebase';
import { Switch, Route } from 'react-router-dom';
import { createUserProfileDoc } from './firebase/firebase';

export const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log('USER SNAPSHOT', snapShot.data());
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(currentUser);
        });
      }

      setCurrentUser(userAuth);
    });
  }, []);

  useEffect(() => {
    unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
