// @flow
import React from "react"
import { compose, type HOC, withStateHandlers, withHandlers } from "recompose"
import { connect } from "react-redux"
import withQuery from "hocs/withQuery"
import Checkbox from "components/Checkbox"
import { applySearch } from "data/search/actions"
import { selectSearchParameters } from "data/search/selectors"
import { listCountries } from "data/countries/queries"
import type { Country } from "data/countries/types"

type Props = {|
  data: Country[],
  setLocalValues: Function,
|}

const CountryMenu = ({ data, countries, handleFilter }) => {
  if (!data) {
    return null
  }

  return (
    data.map((country, index) =>
      <Checkbox key={index} onChange={() => handleFilter(country.id)} isChecked={countries.includes(country.id)} >
        {country.name}
      </Checkbox>
    )
  )
}

const mapStateToProps = state => {

  return {
    searchParameters: selectSearchParameters(state),
  }
}

const mapDispatchToProps = {
  applySearch,
}

const enhancer: HOC<*, Props> = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withQuery(listCountries),
  withStateHandlers(
    ({ searchParameters }) =>  ({
      countries: searchParameters.countries || [],
    }),
    {
      setCountries: props => countries => ({ countries }),
    },
  ),
  withHandlers({
    handleFilter: props => (country: number) => {
      const payload = props.countries.includes(country)
        ? props.countries.filter(c => c !== country)
        : props.countries.concat(country)

      // Update internal state
      props.setCountries(payload)

      // Update external state
      props.setLocalValues(payload)
    },
  }),
)

export default enhancer(CountryMenu)
