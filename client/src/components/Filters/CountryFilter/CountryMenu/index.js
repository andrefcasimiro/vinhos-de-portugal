// @flow
import React, { useGlobal } from "reactn"
import { compose, type HOC, withStateHandlers, withHandlers } from "recompose"
import type { Country } from "data/countries/types"
import Checkbox from "components/Checkbox"

type Props = {|
  data: {
    listCountries: Country[],
  },
|}

const CountryMenu = ({ data, countries, handleFilter }) => {
  if (!data) {
    return null
  }

  console.log('select countries: ', countries)

  return (
    data.listCountries.map((country, index) =>
      <Checkbox key={index} onChange={handleFilter}>
        {country.name}
      </Checkbox>
    )
  )
}

const enhancer: HOC<*, Props> = compose(
  withStateHandlers(
    {
      countries: [],
    },
    {
      setCountries: props => countries => ({ countries }),
    },
  ),
  withHandlers({
    handleFilter: props => country => {
      if (props.countries.includes(country)) {
        return props.setCountries(props.countries.filter(c => c !== country))
      }
      return props.setCountries(props.countries.concat(country))
    },
  }),
)

export default enhancer(CountryMenu)
