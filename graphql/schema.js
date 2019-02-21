exports.typeDefs = `
type User {
    userName: String! @unique
    password: String!
    email: String!
    joinDate: String
    isAdmin: Boolean
    comments: [Video]
}
type Video{
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
`;
