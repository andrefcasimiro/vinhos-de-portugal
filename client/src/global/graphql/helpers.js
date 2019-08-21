// @flow
import { path, identity, isNil } from "ramda"
import type { Query, Mutation } from "./types"
import client from "./apolloClient"

/**
 * Combines the data property with a dynamic identifier and returns its content
 * @param {Array} selector - the identifier nested in the data object
 */
export const getDataFromSelector = (selector: Array<string>) =>
  path(["data"].concat(selector))

/**
 * Fetches the content nested inside the data object
 * And applies a transform function if there is one.
 * @param {Array} selector - An array of selectors to search inside the data object
 * @param {Function} transform - A function that applies transformations to the retrieved data before it is returned
 */
export const transformResponse = (
  selector: Array<string> = [],
  transform?: Function = identity,
) => (data: Object) => {
  const selectedData = getDataFromSelector(selector)(data)

  return isNil(selectedData)
    ? undefined
    : transform(selectedData)
}

export function query<Result, Parameters>(
  { gql, transform, selector }: Query<Result, Parameters>,
  variables?: Parameters,
): Promise<Result> {
  return client
    .query({ query: gql, variables })
}

export function mutate<Result, Parameters>(
  { gql, selector }: Mutation<Parameters, Result>,
  variables: Parameters,
): Promise<Result> {
  return client
    .mutate({ mutation: gql, variables })
}
