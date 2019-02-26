import { gql } from 'apollo-boost';

/* Video Queries */

export const GET_ALL_VIDEOS = gql`
  query {
    getAllVideos {
      _id
      title
      category
      description
      userName
    },
  }
`;

export const GET_VIDEO = gql`
  query($_id:ID!) {
    getVideo(_id:$_id){
      _id
      title
      category
      description
      createdDate
      userName
      comments
    }
}
`

export const SEARCH_VIDEOS = gql`
  query($searchTerm: String) {
    searchVideos(searchTerm: $searchTerm) {
      _id
      title
      comments
    }
  }
`;

/* Video Mutations */
export const ADD_VIDEO = gql`
   mutation($title: String!, $category: String!, $description: String!, $userName: String) {
     addVideo(title: $title, category: $category, description: $description, userName: $userName) {
      _id
      title
      category
      description
      userName
      createdDate
      comments
     }
   }
`

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      userName
      joinDate
      email
      comments {
        _id
        title
      }
    } 
  }
`;

export const GET_USER_VIDEOS = gql`
  query($userName: String!) {
    getUserVideos(userName: $userName) {
      _id
      title
      comments
    }
  }
`

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
