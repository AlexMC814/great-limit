import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';

import './index.scss';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
});

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
