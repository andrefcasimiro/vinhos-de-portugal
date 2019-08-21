import gql from "graphql-tag"

export const addCountryMutation = {
  gql: gql`
    mutation($input: AddCountryInput!) {
      addCountry(input: $input) {
        id
      }
    }
  `,
}
