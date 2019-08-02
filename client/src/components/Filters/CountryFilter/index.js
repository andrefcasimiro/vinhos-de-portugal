// @flow
import React from "react"
import { compose, type HOC, withStateHandlers } from "recompose"
import ListCountries from "queryComponents/ListCountries"
import withOpen from "hocs/withOpen"
import SearchButton from "components/SearchButton"
import Menu from "../_Menu"
import CountryMenu from "./CountryMenu"

type Props = {|
  children: React.Node,
|}

const CountryFilter = ({ children, isOpen, toggleOpen, filters, updateFilter }) => {
  return (
    <React.Fragment>
      <Menu isOpen={isOpen} close={toggleOpen} parameterKey="country" filters={filters}>
        <ListCountries>
          <CountryMenu updateFilter={updateFilter} />
        </ListCountries>
      </Menu>
      <SearchButton active={isOpen} onClick={toggleOpen}>Country</SearchButton>
    </React.Fragment>
  )
}

const enhancer: HOC<*, Props> = compose(
  withOpen,
  withStateHandlers(
    {
      filters: {},
    },
    {
      updateFilter: () => (filters) => ({ filters }),
    }
  )
)

export default enhancer(CountryFilter)
