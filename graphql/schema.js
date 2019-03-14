exports.typeDefs = `

    type User {
        _id: ID
        userName: String! @unique
        password: String!
        email: String!
        joinDate: String
        isAdmin: Boolean
        hasSubscription: Boolean
    }

    type Video {
        _id: ID
        title: String!
        category: String!
        description: String!
        createdDate: String
        userName: String
    }

    type VideoComment {
        _id: ID
        comment: String!
        createdDate: String
        video: String!
        user: String!
    }

    type ArticleComment {
        _id: ID
        comment: String!
        createdDate: String
        article: String!
        user: String!
    }

    type Event {
        _id: ID
        title: String!
        description: String!
        price: Float!
        date: String!
        createdDate: String!
        user: String
    }

    type Query {
        getAllVideos: [Video]
        getVideo(_id: ID!): Video
        searchVideos(searchTerm: String): [Video]
        getCurrentUser: User
        getUserVideos(userName: String!): [Video]
        getVideoComments(video: String!): [VideoComment]
        getUserComments(user: String!): [VideoComment]
    }

    type Token {
        token: String
    }

    type Mutation {
        addVideo( title: String!, category: String!, description: String!, userName: String): Video

        addVideoComment(video: String!, user: String!, comment: String!): VideoComment

        deleteUserVideo(_id: ID): Video

        signInUser(userName: String!, password: String!): Token

        signUpUser(userName: String!, email: String!, password: String!): Token
    }

`;
