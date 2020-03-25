import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from '../components/App';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <App />
        </Route>
      </div>
    </Router>
  );
};

export default AppRouter;
