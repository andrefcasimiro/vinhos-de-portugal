// @flow
import { graphql } from "react-apollo"
import { compose, type Component } from "recompose"
import { always } from "ramda"
import type { Query } from "global/graphql/types"
import { transformResponse } from "global/graphql/helpers"

type Added = {
  data: Data,
  loading: boolean,
  loadMore: void => void,
  refetch: void => void,
}

const withQuery = (
  query: Query<Data, Variables>,
  configuration: {
    variables?: Outter => Variables,
  },
): Component<Added> => {
  const { gql, selector, transform } = query
  const variables = (configuration && configuration.variables) || always({})

  const queryHOC = graphql(gql, {
    props: props => ({
      data: transformResponse(selector, transform)(props),
      refetch: () => props.data.refetch(),
      loading: props.data.networkStatus === 1 ||
        props.data.networkStatus === 2 ||
        props.data.networkStatus === 4,
    }),
    options: props => ({
      variables: {
        ...variables(props),
      },
    }),
  })

  return compose(
    queryHOC,
  )
}

export default withQuery
