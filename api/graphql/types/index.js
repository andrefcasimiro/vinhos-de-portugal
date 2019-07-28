import { mergeTypes } from "merge-graphql-schemas"
import Countries from "./Countries/"
import Regions from "./Regions/"
import Wines from "./Wines/"

const typeDefs = [
  Countries,
  Regions,
  Wines,
]

export default mergeTypes(typeDefs, { all: true })
