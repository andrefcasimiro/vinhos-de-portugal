// @flow
import React from "react"
import { connect } from "react-redux"
import CountryFilter from "components/SearchFilters/CountryFilter"
import { selectSearchParameters } from "data/search/selectors"
import {
  Wrap,
  Title,
  SearchInput,
  SearchInputButton,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const SearchTools = ({ children, searchParameters }: Props) => {
  return (
    <Wrap>
      <Title>Discover wines</Title>
      <SearchInput />
      <SearchInputButton />
      <CountryFilter />
    </Wrap>
  )
}

const mapStateToProps = state => {
  return {
    searchParameters: selectSearchParameters(state),
  }
}

export default connect(mapStateToProps, {})(SearchTools)
