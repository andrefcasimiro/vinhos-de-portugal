// @flow
import React from "react"
import { connect } from "react-redux"
import { compose, type HOC, withStateHandlers, withHandlers } from "recompose"
import { applySearch } from "data/search/actions"
import { selectSearchParameters } from "data/search/selectors"
import type { Country } from "data/countries/types"
import Checkbox from "components/Checkbox"

type Props = {|
  data: {
    listCountries: Country[],
  },
  updateFilter: Function,
|}

const CountryMenu = ({ data, countries, handleFilter }) => {
  if (!data) {
    return null
  }

  return (
    data.listCountries.map((country, index) =>
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
  withStateHandlers(
    ({ searchParameters }) => ({
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

      console.log(payload)
      // Update external state
      props.updateFilter(payload)
    },
  }),
)

export default enhancer(CountryMenu)
