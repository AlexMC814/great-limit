import React from 'react';
import './Landing.scss';

import { Query } from 'react-apollo';
import { GET_ALL_VIDEOS } from '../../queries';

const Landing = () => (
  <div className='Landing'>
    <h1>Home</h1>
    <Query query={GET_ALL_VIDEOS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        console.log(data);

        return <p>Videos</p>;
      }}
    </Query>
  </div>
);

export default Landing;
