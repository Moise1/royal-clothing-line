import './App.css';
import { Home } from './components/Home';
import { Shop } from './pages/shop/shop';
import {Header} from './components/header/Header';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

