import './App.css';
import { Home } from './components/Home';
import { Hats } from './components/Hats';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

