// @flow
import { graphql } from "react-apollo"
import { compose, type HOC } from "recompose"
import type { Query } from "global/graphql/types"
import { transformResponse } from "global/graphql/helpers"

type Config<Outter, Variables> = {
  variables?: Outter => Variables,
}

type Added<Data> = {
  data: Data,
  loading: boolean,
  loadMore: void => void,
  refetch: void => void,
}

function withQuery<Outter, Data, Variables>(
  query: Query<Data, Variables>,
  configuration: Config<Outter, Variables> = {},
  // $ExpectError
): HOC<{ ...$Exact<Added<Data>>, ...$Exact<Outter> }, Outter> {
  const { gql, selector, transform } = query

  const customGraphqlHoc = graphql(gql, {
    props: props => ({
      data: transformResponse(selector, transform)(props),
      refetch: () => props.data.refetch(),
      loading: props.data.networkStatus === 1 ||
        props.data.networkStatus === 2 ||
        props.data.networkStatus === 4,
    }),
  })

  return compose(
    customGraphqlHoc,
  )
}

export default withQuery
