// @flow
import { graphql } from "react-apollo"
import { compose, type HOC } from "recompose"
import { identity } from "ramda"
import type { Mutation } from "global/graphql/types"
import { getDataFromSelector } from "global/graphql/helpers"

const getRefetchQueries = (
  refetchQueries: Array<string>,
  props: any,
) => {
  if (!refetchQueries.length) {
    return []
  }

  return refetchQueries.map(refetchQuery => ({
    query: refetchQuery.gql,
  }))
}

type Added = {
  submitMutation: Variables => Promise,
}

function withMutation(
  mutation: Mutation,
): HOC<{ ...$Exact<Added>, ...$Exact<Outter> }, Outter> {
  const {
    gql,
    refetch = [],
    selector,
    transform = identity,
  } = mutation

  return compose(
    graphql(gql, {
      props: ({ mutate, ownProps }) => ({
        submitMutation: variables =>
          mutate({
            variables,
            refetchQueries: getRefetchQueries(refetch),
          })
            .then(getDataFromSelector(selector || []))
            .then(transform)
      }),
    }),
  )
}

export default withMutation
