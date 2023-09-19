export default `#graphql
    type User {
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        bio: String
        avatar: String
        following: [User]
        followers: [User]
        createdAt: String!
        updatedAt: String!
    }
`;
