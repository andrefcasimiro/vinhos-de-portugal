export default `
  type Wine {
    id: Int
    name: String
    type: String
    producer: String
    region_id: Int
    grape: String
    alcohol: Int
    price_range_per_750_ml_bottle: Int
    food_suggestion: String
  }

  type Query {
    getWine(id: Int!): Wine
    listWines(filter: ListWinesFilter): [Wine]
  }

  type Mutation {
    addWine(input: AddWineInput): Wine
  }

  input ListWinesFilter {
    countries: [Int]
  }

  input AddWineInput {
    name: String!
    type: String!
    producer: String!
    region_id: Int!
    grape: String!
    alcohol: Int!
    price_range_per_750_ml_bottle: Int
    food_suggestion: String
  }
`
