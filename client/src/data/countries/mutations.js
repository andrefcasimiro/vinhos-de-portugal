import gql from "graphql-tag"
import { listWinesQuery } from "data/wines/queries"

export const addCountryMutation = {
  gql: gql`
    mutation($input: AddCountryInput!) {
      addCountry(input: $input) {
        id
      }
    }
  `,
  refetch: [listWinesQuery],
}
