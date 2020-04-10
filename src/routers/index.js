import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import AuthRoute from '../utils/AuthRoute';

import HeaderComponent from '../components/HeaderComponent';
import LoginComponent from '../components/LoginComponent';
import CreateStoryComponent from '../components/CreateStoryComponent';
import StoriesComponent from '../components/StoriesComponent';
import StoryComponent from '../components/StoryComponent';

const AppRouter = () => (
  <Router>
    <HeaderComponent />

    <Switch>
      <Route exact path="/">
        <LoginComponent />
      </Route>
      <AuthRoute path="/create-story" component={CreateStoryComponent} />
      <AuthRoute exact path="/stories" component={StoriesComponent} />
      <AuthRoute path="/stories/:storyId" component={StoryComponent} />
    </Switch>
  </Router>
);

export default AppRouter;
