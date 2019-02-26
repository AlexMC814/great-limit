import React from 'react';
import UserInfo from '../../components/UI/UserInfo/UserInfo';
import UserVideos from '../../components/UI/UserVideos/UserVideos';

const Profile = ({ session }) => {
    return (
        <div>
            <UserInfo session={session} />
            <UserVideos userName={session.getCurrentUser.userName} />
        </div>
    )
}

export default Profile
