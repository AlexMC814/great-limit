import { gql } from 'apollo-boost';

export const GET_ALL_VIDEOS = gql`
  query {
    getAllVideos {
      _id
      title
      category
      description
      userName
    }
  }
`;

export const GET_VIDEO = gql`
  query($_id: ID!) {
    getVideo(_id: $_id) {
      _id
      title
      category
      description
      createdDate
      userName
    }
  }
`;

export const SEARCH_VIDEOS = gql`
  query($searchTerm: String) {
    searchVideos(searchTerm: $searchTerm) {
      _id
      title
    }
  }
`;

/* Video Mutations */
export const ADD_VIDEO = gql`
  mutation(
    $title: String!
    $category: String!
    $description: String!
    $userName: String
  ) {
    addVideo(
      title: $title
      category: $category
      description: $description
      userName: $userName
    ) {
      _id
      title
      category
      description
      userName
      createdDate
    }
  }
`;

export const DELETE_USER_VIDEO = gql`
  mutation($_id: ID!) {
    deleteUserVideo(_id: $_id) {
      _id
    }
  }
`;
