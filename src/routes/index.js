import {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Home } from '../components/Home';
import { Shop } from '../pages/shop/shop';
import { Login } from '../components/user-auth/Login';
import { Signup } from '../components/user-auth/Signup';
import { createUserProfileDoc, auth } from '../firebase/firebase';
import { setCurrentUser } from '../redux/actions/users';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = () => {
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
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <ProtectedRoute exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Switch>
    )
}
