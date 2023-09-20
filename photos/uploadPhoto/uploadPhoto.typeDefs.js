export default `#graphql
    scalar Upload
    type Mutation {
        uploadPhoto(file: String!, caption: String): Photo
    }
`;
