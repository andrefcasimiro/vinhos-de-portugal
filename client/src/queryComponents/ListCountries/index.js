import React from "react"
import { Query } from "react-apollo"
import { listCountries } from "data/countries/queries"

type Props = {
  children: React.Node,
  variables: Object,
}

const ListCountries = ({ children, variables }: Props) => {

  return (
    <Query query={listCountries} variables={variables}>
      {({ loading, error, data, fetchMore }) => {
        if (loading || !data) {
          return null
        }

        return React.cloneElement(children, { data })
      }}
    </Query>
  )
}

export default ListCountries
