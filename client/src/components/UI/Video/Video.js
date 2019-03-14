import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { videoQueries } from '../../../queries';

import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';
import Spinner from '../../UI/Spinner/Spinner';

const { GET_VIDEO } = videoQueries;

const VideoPage = ({ match, session }) => {
  const { _id } = match.params;
  const user = session.getCurrentUser;
  return (
    <Query query={GET_VIDEO} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner />;
        if (error) return <div>{error}</div>;
        return (
          <div>
            <h2>{data.getVideo.title}</h2>
            <p>Категория: {data.getVideo.category}</p>
            <p>Описание: {data.getVideo.description}</p>
            <p>Опубликовано: {data.getVideo.userName}</p>
            {user ? (
              <AddComment video={_id} />
            ) : (
              <strong>Авторизуйтесь чтобы оставить комментарий</strong>
            )}
            <div>
              <h4>Коментарии:</h4>
              <Comments video={_id} />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(VideoPage);
