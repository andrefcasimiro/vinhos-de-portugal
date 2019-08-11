// @flow
import React from "react"
import { compose, type HOC, withStateHandlers } from "recompose"
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
      <Menu isOpen={isOpen} close={toggleOpen} parameterKey="countries" filters={filters}>
        <CountryMenu updateFilter={updateFilter} />
      </Menu>
      <SearchButton active={isOpen} onClick={toggleOpen} isOpen={isOpen}>Country</SearchButton>
    </React.Fragment>
  )
}

const enhancer: HOC<*, Props> = compose(
  withOpen,
  withStateHandlers(
    {
      filters: [],
    },
    {
      updateFilter: () => (filters) => ({ filters }),
    },
  )
)

export default enhancer(CountryFilter)
