export default `
  type Region {
    id: Int
    name: String
    country_id: Int
  }

  type Query {
    getRegion(id: Int!): Region
    listRegions: [Region]
  }

  type Mutation {
    addRegion(input: AddRegionInput): Region
  }

  input AddRegionInput {
    name: String!
    country_id: Int!
  }
`
