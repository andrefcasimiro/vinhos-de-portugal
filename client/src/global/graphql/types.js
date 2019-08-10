// @flow
export type Query<Data, Params = empty> = {|
  gql: any,
  selector?: string[],
  transform?: any => Data,
  pagination?: string[],
  options?: Function,
|}

export type Mutation<Variables, Result = empty> = {
  gql: any,
  selector?: string[],
  refetch?: Query<any>[],
  transform?: any => Result,
}

export type GraphqlError = {|
  graphQLErrors: {
    data: {
      code: string,
    },
  }[],
|}
