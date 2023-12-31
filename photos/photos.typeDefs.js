export default `# graphql
type Photo {
	id: Int!
	user: User!
	file: String!
	caption: String
	hashtags: [Hashtag]
	likes: Int!
	comments: Int!
	isMine: Boolean!
	createdAt: String!
	updatedAt: String!
}
type Hashtag {
	id: Int!
	hashtag: String!
	photos(page: Int!): [Photo]
	totalPhotos: Int!
	createdAt: String!
	updatedAt: String!
}
type Like {
	id: Int!
	photo: Photo!
	createdAt: String!
	updatedAt: String!
}
`;