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
import withSession from './hoc/withSession';

import './index.scss';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);

      // if (networkError.statusCode === 401) {
      //   localStorage.removeItem('token');
      // }
    }
  },
});

const Root = ({ refetch }) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/signin' render={() => <SignIn refetch={refetch} />} />
        <Route path='/signup' render={() => <SignUp refetch={refetch} />} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
