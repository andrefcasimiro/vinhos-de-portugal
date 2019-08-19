// @flow
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'

const graphqlURI = `http://localhost:5000/graphql`
const headers = `authorization: Bearer`

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: graphqlURI, headers }),
})

export default client
