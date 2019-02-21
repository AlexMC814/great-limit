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
type Video{
    _id: ID
    videoTitle: String!
    category: String!
    description: String!
    createdDate: String
    comments: String
    userName: String
}

type Query {
    getAllVideos: [Video]
}

type Mutation {
    addVideo(videoTitle: String!, category: String!, description: String!, userName: String): Video
}

`;
