import gql from "graphql-tag"
import type { Wine } from "./types"

export const listWinesQuery: Wine[] = gql`
  query listWinesQuery {
    listWines {
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
`
