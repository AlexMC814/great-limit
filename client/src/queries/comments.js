import { gql } from 'apollo-boost';

/* Comment Queries */

export const GET_VIDEO_COMMENTS = gql`
  query($video: String!) {
    getVideoComments(video: $video) {
      _id
      video
      user
      comment
      createdDate
    }
  }
`;

/* Comments mutations */
export const GET_USER_COMMENTS = gql`
  query($user: String!) {
    getVideoComments(user: $user) {
      _id
      video
      user
      comment
      createdDate
    }
  }
`;

export const ADD_VIDEO_COMMENT = gql`
  mutation($video: String!, $user: String!, $comment: String!) {
    addVideoComment(video: $video, user: $user, comment: $comment) {
      _id
      video
      user
      comment
      createdDate
    }
  }
`;
