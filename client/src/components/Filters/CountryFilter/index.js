// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import ListCountries from "queryComponents/ListCountries"
import withOpen from "hocs/withOpen"
import SearchButton from "components/SearchButton"
import Controls from "components/Controls"
import Menu from "../_Menu"
import CountryMenu from "./CountryMenu"

type Props = {|
  children: React.Node,
|}

const CountryFilter = ({ children, isOpen, toggleOpen }) => {

  return (
    <React.Fragment>
      <Menu isOpen={isOpen} close={toggleOpen}>
        <ListCountries>
          <CountryMenu />
        </ListCountries>
      </Menu>
      <SearchButton active={isOpen} onClick={toggleOpen}>Country</SearchButton>
    </React.Fragment>
  )
}

const enhancer: HOC<*, Props> = compose(
  withOpen,
)

export default enhancer(CountryFilter)
