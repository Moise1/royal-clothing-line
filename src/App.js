import './App.css';
import {Header} from './components/header/Header';
import {Routes} from './routes';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes/>
    </div>
  );
}
