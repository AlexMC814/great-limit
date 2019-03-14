import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import CommentItem from '../CommentItem/CommentItem';
import Error from '../Error/Error';
import { commentQueries } from '../../../queries';

import { formatDate } from '../../../utils/utils';

const { GET_VIDEO_COMMENTS } = commentQueries;

export default class Comments extends Component {
  render() {
    const { video } = this.props;
    return (
      <Query query={GET_VIDEO_COMMENTS} variables={{ video }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          console.log(data);
          return (
            <Fragment>
              {!data.getVideoComments.length && (
                <p>
                  <strong>
                    У этого видео еще нет комментариев. Добавьте первый.
                  </strong>
                </p>
              )}
              <ul>
                {error && <Error message={error.message} />}
                {data.getVideoComments.map(comment => {
                  return (
                    <CommentItem
                      key={comment._id}
                      user={comment.user}
                      date={formatDate(comment.createdDate)}
                      comment={comment.comment}
                    />
                  );
                })}
              </ul>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
