import * as React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router';
import { History } from 'history';
import HomePage from './app/containers/HomePage';
import BlogPostPage from './app/containers/BlogPostPage';

export interface AppProps {
  history: History;
}

export interface AppState {
  /* empty */
}

export const App = ({ history }: AppProps) => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/blog/:id" component={BlogPostPage} />
    </Switch>
  </Router>
);
