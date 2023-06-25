import gql from 'graphql-tag'

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
     user{
        name
        email
     },
     token
    }
  }
`
