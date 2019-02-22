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
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      userName
      joinDate
      email
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($userName: String!, $password: String!) {
    signInUser(userName: $userName, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($userName: String!, $email: String!, $password: String!) {
    signUpUser(userName: $userName, email: $email, password: $password) {
      token
    }
  }
`;
