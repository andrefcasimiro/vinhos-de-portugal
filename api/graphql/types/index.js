import { mergeTypes } from "merge-graphql-schemas"
import Wines from "./Wines/"

const typeDefs = [
  Wines,
]

export default mergeTypes(typeDefs, { all: true })
