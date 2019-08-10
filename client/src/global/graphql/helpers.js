// @flow
import { path, identity, isNil } from "ramda"
import type { Query, Mutation } from "./types"
import client from "./apolloClient"

export const getDataFromSelector = (selector: string[]) =>
  path(["data"].concat(selector))

export const transformResponse = (
  selector: string[] = [],
  transform?: Function = identity,
) => (data: Object) => {
  const selectedData = getDataFromSelector(selector)(data)
  return isNil(selectedData) ? undefined : transform(selectedData)
}

export function query<Result, Parameters>(
  { gql, transform, selector }: Query<Result, Parameters>,
  variables?: Parameters,
): Promise<Result> {
  return client
    .query({ query: gql, variables })
    .then(res => res)
}

export function mutate<Result, Parameters>(
  { gql, selector }: Mutation<Parameters, Result>,
  variables: Parameters,
): Promise<Result> {
  return client
    .mutate({ mutation: gql, variables })
    .then(res => res)
}
