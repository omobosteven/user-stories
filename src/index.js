import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { toast } from 'react-toastify';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

import AppRouter from './routers';

const persistor = persistStore(store);

toast.configure({
  hideProgressBar: true,
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
