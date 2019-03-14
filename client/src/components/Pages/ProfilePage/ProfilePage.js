import React from 'react';

import UserInfo from '../../UI/UserInfo/UserInfo';
import VideoList from '../../UI/VideoList/VideoList';
// import UserVideos from '../../components/UI/UserVideos/UserVideos';

import withAuth from '../../../hoc/withAuth';

const Profile = ({ session }) => {
  return (
    <div>
      <UserInfo session={session} />
      <VideoList />
      {/* <UserVideos userName={session.getCurrentUser.userName} /> */}
    </div>
  );
};

export default withAuth(session => session && session.getCurrentUser)(Profile);
