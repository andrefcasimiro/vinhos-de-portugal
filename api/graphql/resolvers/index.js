import { mergeResolvers } from "merge-graphql-schemas"
import Wines from "./Wines"

const resolvers = [
  Wines,
]

export default mergeResolvers(resolvers)
