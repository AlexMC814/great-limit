import React from 'react';
import { Query } from 'react-apollo';
import { videoQueries } from '../../../queries';
import VideoItem from '../VideoItem/VideoItem';

const { GET_ALL_VIDEOS } = videoQueries;

const VideoList = () => (
  <div className='Landing'>
    <h1>Видео</h1>
    <Query query={GET_ALL_VIDEOS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        console.log(data);

        return (
          <ul>
            {data.getAllVideos.map(video => {
              return <VideoItem key={video._id} {...video} />;
            })}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default VideoList;
