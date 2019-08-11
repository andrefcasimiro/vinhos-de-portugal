import gql from "graphql-tag"
import type { Country } from "./types"
import type { Query } from "global/graphql/types"

export const listCountries: Query<Country[]> = {
  gql: gql`
    query listCountries {
      listCountries {
        id
        name
      }
    }
  `,
  selector: ["listCountries"],
}
