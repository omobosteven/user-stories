import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = process.env.NODE_ENV
 === 'development' ? composeWithDevTools(applyMiddleware(ReduxThunk)) : applyMiddleware(ReduxThunk);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
  persistedReducer,
  undefined,
  middleware,
);
