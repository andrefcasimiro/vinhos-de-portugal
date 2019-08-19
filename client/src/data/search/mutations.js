import gql from "graphql-tag"

export const authMutation = gql`
  mutation($input: LoginInput!) {
    login(input: $input)
  }
`
