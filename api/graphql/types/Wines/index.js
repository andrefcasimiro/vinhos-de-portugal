export default `
  type Wine {
    id: Int
    name: String
    type: String
    producer: String
    region: String
    grape: String
    alcohol: Int
    price_range_per_750_ml_bottle: Int
    food_suggestion: String
  }

  type Query {
    wine(id: Int!): Wine
    wines: [Wine]
  }

  type Mutation {
    addWine(input: AddWineInput): Wine
  }

  input AddWineInput {
    name: String!
    type: String!
    producer: String!
    region: String!
    grape: String!
    alcohol: Int!
    price_range_per_750_ml_bottle: Int
    food_suggestion: String
  }
`
