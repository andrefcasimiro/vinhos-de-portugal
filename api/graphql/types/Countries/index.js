export default `
  type Country {
    id: Int
    name: String
  }

  type Query {
    getCountry(id: Int!): Country
    listCountries: [Country]
  }

  type Mutation {
    addCountry(input: AddCountryInput): Country
  }

  input AddCountryInput {
    name: String!
  }
`
