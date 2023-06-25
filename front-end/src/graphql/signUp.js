import gql from 'graphql-tag'

export const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!,$password:String!) {
    signup(data: { email: $email, password: $password,$name:String! }) {
     user{
        name
        email
     },
     token
    }
  }
`
