// @flow
import React from "react"
import withOpen from "hocs/withOpen"
import ContextMenu from "components/ContextMenu"
import type { Country } from "data/countries/types"
import Checkbox from "components/Checkbox"

type Props = {|
  data: {
    listCountries: Country[],
  },
|}

const CountryMenu = ({ data }: Props) => {
  if (!data) {
    return null
  }

  return (
    data.listCountries.map((country, index) => 
      <Checkbox>
        {country.name}
      </Checkbox>
    )
  )
}

export default CountryMenu
