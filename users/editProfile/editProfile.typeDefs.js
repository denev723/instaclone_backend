export default `# graphql
type Mutation {
	editProfile(
	firstName: String
	lastName: String
	email: String
	username: String
	password: String
	bio: String
	avatar: Upload
	): MutationResponse!
}
scalar Upload
`;