import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import './SignOut.scss';

const handleSignOut = (client, history) => {
  localStorage.setItem('token', '');
  client.resetStore();
  history.push('/');
};

const SignOutBtn = ({ history }) => (
  <ApolloConsumer>
    {client => {
      // console.log(client);
      return (
        <span
          className='signout'
          onClick={() => handleSignOut(client, history)}>
          Выйти
        </span>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(SignOutBtn);
