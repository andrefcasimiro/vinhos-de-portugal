import gql from "graphql-tag"
import type { Country } from "./types"

export const listCountriesQuery: Country[] = gql`
  query listCountriesQuery {
    listCountries {
      id
      name
    }
  }
`
