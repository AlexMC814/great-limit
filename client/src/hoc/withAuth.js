import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { userQueries } from '../queries';

const { GET_CURRENT_USER } = userQueries;

const withAuth = conditionFunc => Component => props => {
  return (
    <Query query={GET_CURRENT_USER}>
      {({ data, loading, error }) => {
        if (loading) return null;
        if (error) return <div>{error}</div>;

        return conditionFunc(data) ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        );
      }}
    </Query>
  );
};

export default withAuth;
