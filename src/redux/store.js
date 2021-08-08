import { createStore, applyMiddleware , compose} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = createStore(rootReducer, enhancer);
