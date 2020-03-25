import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = process.env.NODE_ENV
 === 'development' ? composeWithDevTools(applyMiddleware(ReduxThunk)) : applyMiddleware(ReduxThunk);

export default createStore(
  rootReducer,
  undefined,
  middleware,
);
