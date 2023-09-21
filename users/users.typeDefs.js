export default `# graphql
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
	totalFollowing: Int!
	totalFollowers: Int!
	isMe: Boolean!
	isFollowing: Boolean!
	photos: [Photo]
	createdAt: String!
	updatedAt: String!
}
`;