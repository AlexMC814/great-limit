import { gql } from 'apollo-boost';

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

export const GET_USER_VIDEOS = gql`
  query($userName: String!) {
    getUserVideos(userName: $userName) {
      _id
      title
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
