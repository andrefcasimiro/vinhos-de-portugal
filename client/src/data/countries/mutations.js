import gql from "graphql-tag"

export const addCountryMutation = gql`
  mutation($input: AddCountryInput!) {
    addCountry(input: $input) {
      id
    }
  }
`
