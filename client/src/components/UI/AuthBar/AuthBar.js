import React, { Fragment } from 'react';

import AuthBarAuth from './AuthBarAuth/AuthBarAuth';
import AuthBarUnAuth from './AuthBarUnAuth/AuthBarUnAuth';

import './AuthBar.scss';

const AuthBar = ({ session, scrolled }) => {
  return (
    <Fragment>
      {session && session.getCurrentUser ? (
        <AuthBarAuth session={session} scrolled={scrolled} />
      ) : (
        <AuthBarUnAuth scrolled={scrolled} />
      )}
    </Fragment>
  );
};

export default AuthBar;
