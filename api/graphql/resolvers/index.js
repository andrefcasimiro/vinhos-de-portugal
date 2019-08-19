import { mergeResolvers } from "merge-graphql-schemas"
import Countries from "./Countries"
import Regions from "./Regions"
import Wines from "./Wines"

const resolvers = [
  Countries,
  Regions,
  Wines,
]

export default mergeResolvers(resolvers)
