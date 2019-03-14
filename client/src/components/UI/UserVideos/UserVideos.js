import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import {
  GET_USER_VIDEOS,
  DELETE_USER_VIDEO,
  GET_ALL_VIDEOS,
  GET_CURRENT_USER,
} from '../../../queries';
import { Link } from 'react-router-dom';

const deleteHandler = deleteUserVideo => {
  const confirmDelete = window.confirm(
    'Вы уверены что хотите удалить это видео?'
  );
  if (confirmDelete) {
    deleteUserVideo()
      .then(({ data }) => {
        console.log(data);
      })
      .catch();
  }
};

const UserVideos = ({ userName }) => {
  return (
    <Query query={GET_USER_VIDEOS} variables={{ userName }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        console.log(data);
        return (
          <Fragment>
            {data.getUserVideos.length > 0 && <h3>Ваши видео</h3>}

            {!data.getUserVideos.length && (
              <p>
                <strong>Вы еще не добавили ни одного видео</strong>
              </p>
            )}
            <ul>
              {data.getUserVideos.map(video => {
                return (
                  <li key={video._id}>
                    <Link to={`/videos/${video._id}`}>
                      <p>{video.title}</p>
                    </Link>
                    <p>{video.comments}</p>
                    <Mutation
                      mutation={DELETE_USER_VIDEO}
                      variables={{ _id: video._id }}
                      refetchQueries={() => [
                        { query: GET_ALL_VIDEOS },
                        { query: GET_CURRENT_USER },
                      ]}
                      update={(cache, { data: { deleteUserVideo } }) => {
                        const { getUserVideos } = cache.readQuery({
                          query: GET_USER_VIDEOS,
                          variables: { userName },
                        });
                        cache.writeQuery({
                          query: GET_USER_VIDEOS,
                          variables: { userName },
                          data: {
                            getUserVideos: getUserVideos.filter(video => {
                              return video._id !== deleteUserVideo._id;
                            }),
                          },
                        });
                      }}>
                      {(deleteUserVideo, attrs = {}) => {
                        return (
                          <p onClick={() => deleteHandler(deleteUserVideo)}>
                            {attrs.loading ? 'Удаляем...' : 'X'}
                          </p>
                        );
                      }}
                    </Mutation>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default UserVideos;
