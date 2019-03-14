import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Container Components
import LandingPage from './components/Pages/LandingPage/LandingPage';
import SignInPage from './components/Pages/Auth/SignInPage/SignIn';
import SignUpPage from './components/Pages/Auth/SignUpPage/SignUp';
import AddVideoPage from './components/Pages/AddVideoPage/AddVideoPage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import Video from './components/UI/Video/Video';
import EventsPage from './components/Pages/EventsPage/EventsPage';

// HOC imports
import withSession from './hoc/withSession';

// UI components
import AuthBar from './components/UI/AuthBar/AuthBar';
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
      // console.log('Network Error', networkError);
      // if (networkError.statusCode === 401) {
      //   localStorage.removeItem('token');
      // }
    }
  },
});

class Root extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY >= 100;
      isTop
        ? this.setState({
            scrolled: true,
          })
        : this.setState({
            scrolled: false,
          });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    const { refetch, session } = this.props;

    return (
      <Router>
        <Fragment>
          <AuthBar session={session} scrolled={this.state.scrolled} />
          <Navbar session={session} scrolled={this.state.scrolled} />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/search' component={Search} />
            <Route
              path='/signin'
              render={() => <SignInPage refetch={refetch} />}
            />
            <Route
              path='/signup'
              render={() => <SignUpPage refetch={refetch} />}
            />
            <Route
              path='/videos/add'
              render={() => <AddVideoPage session={session} />}
            />
            <Route
              path='/videos/:_id'
              render={() => <Video session={session} />}
            />
            <Route
              path='/profile'
              render={() => <ProfilePage session={session} />}
            />
            <Route path='/events' render={() => <EventsPage />} />
            <Route path='/articles' component={BlogPage} />
            <Route path='/' />
            <Redirect to='/' />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
