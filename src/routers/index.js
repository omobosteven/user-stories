import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import LoginComponent from '../components/LoginComponent';
import CreateStoryComponent from '../components/CreateStoryComponent';
import AllStoriesComponent from '../components/AllStoriesComponent';
import UserStoriesComponent from '../components/UserStoriesComponent';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <LoginComponent />
      </Route>
      <Route path="/createStory">
        <CreateStoryComponent />
      </Route>
      <Route path="/getStories">
        <UserStoriesComponent />
      </Route>
      <Route path="/admin/getStories">
        <AllStoriesComponent />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
