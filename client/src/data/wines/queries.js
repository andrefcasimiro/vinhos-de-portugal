import gql from "graphql-tag"
import type { Wine } from "./types"
import type { Query } from "global/graphql/types"

export const listWinesQuery: Query<Wine[]> = {
  gql: gql`
    query listWinesQuery($filter: ListWinesFilter) {
      listWines(filter: $filter) {
        id
        name
        type
        producer
        region_id
        grape
        alcohol
        price_range_per_750_ml_bottle
        food_suggestion
      }
    }
  `,
  selector: ["listWines"],
}
