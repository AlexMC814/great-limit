import { gql } from 'apollo-boost';

/* Video Queries */

export const GET_ALL_VIDEOS = gql`
  query {
    getAllVideos {
      title
      category
      description
      userName
      comments
      createdDate
    }
  }
`;

/* Video Mutations */

/* User Queries */

/* User Mutations */
export const SIGNUP_USER = gql`
  mutation($userName: String!, $email: String!, $password: String!) {
    signUpUser(userName: $userName, email: $email, password: $password) {
      token
    }
  }
`;
