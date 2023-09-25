export default `# graphql
scalar Upload
type Mutation {
	uploadPhoto(file: Upload, caption: String): Photo
}
`;