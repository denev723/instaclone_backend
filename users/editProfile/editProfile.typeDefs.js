export default `#graphql
    type EditProfileResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        editProfile(
            firstName: String
            lastName: String
            email: String
            username: String
            password: String
            bio: String
            avatar: Upload
        ): EditProfileResult!
    }
    scalar Upload
`;
