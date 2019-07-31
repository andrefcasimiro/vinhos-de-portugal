import React from "react"
import { Query } from "react-apollo"
import { listCountriesQuery } from "data/countries/queries"
import Spinner from "componentsStyled/Spinner"

type Props = {
  children: React.Node,
}

const ListCountries = ({ children }: Props) => {

  return (
    <Query query={listCountriesQuery}>
      {({ loading, error, data, fetchMore }) => {
        if (loading || !data) {
          return <Spinner />
        }

        return React.cloneElement(children, {data})
      }}
    </Query>
  )
}

export default ListCountries
