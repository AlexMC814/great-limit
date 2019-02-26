import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_USER_VIDEOS } from '../../../queries';
import { Link } from 'react-router-dom';

const UserVideos = ({ userName }) => {
    return (
        <Query query={GET_USER_VIDEOS} variables={{ userName }}>
            {({ data, loading, error }) => {
                if (loading) return <div>Loading...</div>
                if (error) return <div>{error}</div>
                console.log(data);
                return (
                    <Fragment>
                        <h3>Ваши видео</h3>
                        <ul>
                            {
                                data.getUserVideos.map(video => {
                                    return (
                                        <li key={video._id}>
                                            <Link to={`/videos/${video._id}`}><p>{video.title}</p></Link>
                                            <p>{video.comments}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Fragment>
                );
            }}
        </Query>
    )
}

export default UserVideos;
