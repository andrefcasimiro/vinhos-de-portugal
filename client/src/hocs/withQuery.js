// @flow
import { graphql } from "react-apollo"
import { pathOr, always } from "ramda"
import { compose, branch, renderComponent, type HOC } from "recompose"
import type { Query } from "global/graphql/types"
import { transformResponse } from "global/graphql/helpers"

const notFound = data => {
  const errors = pathOr([], ["error", "graphQLErrors"], data)

  return errors.some(x => pathOr("", ["data", "code"], x).endsWith("NOT_FOUND"))
}

type Config<Outter, Variables> = {
  noLoader?: boolean,
  noEmpty?: boolean,
  variables?: Outter => Variables,
  config?: {
    skip: Outter => boolean,
  },
}

type Added<Data> = {
  data: Data,
  loading: boolean,
  loadingMore: boolean,
  count: number,
  loadMore: void => void,
  notFound: boolean,
  refetch: void => void,
}

function withQuery<Outter, Data, Variables>(
  query: Query<Data, Variables>,
  configuration: Config<Outter, Variables> = {},
  // $ExpectError
): HOC<{ ...$Exact<Added<Data>>, ...$Exact<Outter> }, Outter> {
  const { gql, selector, transform, options = always({}) } = query
  const {
    noLoader = false,
    noEmpty = false,
    variables = always({}),
    config = {},
  } = configuration

  const customGraphqlHoc = graphql(gql, {
    props: props => ({
      data: transformResponse(selector, transform)(props),
      refetch: () => props.data.refetch(),
      // loading | setVariables | refetch
      loading:
        props.data.networkStatus === 1 ||
        props.data.networkStatus === 2 ||
        props.data.networkStatus === 4,
      loadingMore: props.data.networkStatus === 3,
      notFound: notFound(props.data),
    }),
    options: props => ({
      notifyOnNetworkStatusChange: true, // to update loading when fetching more
      variables: {
        ...variables(props),
      },
      ...options(props),
    }),
    ...config,
  })

  return compose(
    customGraphqlHoc,
  )
}

export default withQuery
