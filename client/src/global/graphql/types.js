// @flow
export type Query = {|
  gql: any,
  selector?: string[],
  transform?: any => Data,
|}

export type Mutation = {
  gql: any,
  selector?: string[],
  refetch?: Query<any>[],
}
