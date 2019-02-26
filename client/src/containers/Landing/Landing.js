import React from 'react';
import './Landing.scss';

import { Query } from 'react-apollo';
import { GET_ALL_VIDEOS } from '../../queries';
import VideoItem from '../../components/UI/VideoItem/VideoItem';

const Landing = () => (
  <div className='Landing'>
    <h1>Home</h1>
    <Query query={GET_ALL_VIDEOS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        console.log(data);

        return <ul>{data.getAllVideos.map((video) => {
          return (
            <VideoItem key={video._id} {...video} />
          )
        })}</ul>;
      }}
    </Query>
  </div>
);

export default Landing;
