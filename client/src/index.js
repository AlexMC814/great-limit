import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Container Components
import Landing from './containers/Landing/Landing';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import AddVideo from './containers/AddVideo/AddVideo';
import Profile from './containers/Profile/Profile';
import Blog from './containers/Blog/Blog';
import VideoPage from './containers/VideoPage/VideoPage';

// HOC imports
import withSession from './hoc/withSession';

// UI components
import Navbar from './components/UI/Navbar/Navbar';
import Search from './components/UI/Search/Search';

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

const Root = ({ refetch, session }) => {
  return (
    <Router>
      <Fragment>
        <Navbar session={session} />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/search' component={Search} />
          <Route path='/signin' render={() => <SignIn refetch={refetch} />} />
          <Route path='/signup' render={() => <SignUp refetch={refetch} />} />
          <Route path='/video/add' render={() => <AddVideo session={session} />} />
          <Route path='/profile' component={Profile} />
          <Route path='/blog' component={Blog} />
          <Route path='/videos/:_id' component={VideoPage} />
          <Redirect to='/' />
        </Switch>
      </Fragment>
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
