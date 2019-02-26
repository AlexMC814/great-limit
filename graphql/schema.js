exports.typeDefs = `
    type User {
        _id: ID
        userName: String! @unique
        password: String!
        email: String!
        joinDate: String
        isAdmin: Boolean
        comments: [Video]
    }
    type Video {
        _id: ID
        title: String!
        category: String!
        description: String!
        createdDate: String
        comments: String
        userName: String
    }

    type Query {
        getAllVideos: [Video]
        getVideo(_id: ID!): Video
        getCurrentUser: User
    }

    type Token {
        token: String
    }

    type Mutation {
        addVideo( title: String!, category: String!, description: String!, userName: String): Video

        signInUser(userName: String!, password: String!): Token

        signUpUser(userName: String!, email: String!, password: String!): Token
    }

`;
