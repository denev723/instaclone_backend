export default`# graphql
type Query {
	seePhotoComments(id: Int!, lastId: Int): [Comment]
}
`