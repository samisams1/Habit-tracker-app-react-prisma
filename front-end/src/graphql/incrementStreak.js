import gql from 'graphql-tag'
/*export const INCREMENT_STREAK_MUTATION = gql`
  mutation incrementStreak($name: String) {
    incrementStreak(name: $name) {
      streak
    }
  }
`
*/
export const INCREMENT_STREAK_MUTATION = gql`
	query TWEETS_QUERY {
		tweets {
			id
			createdAt
			content
			likes {
				id
			}
			comments {
				id
			}
			author {
				id
				name
				Profile {
					id
					avatar
				}
			}
    `