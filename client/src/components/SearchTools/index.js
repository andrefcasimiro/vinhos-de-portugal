// @flow
import React from "react"
import { connect } from "react-redux"
import CountryFilter from "components/Filters/CountryFilter"
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
  console.log('searchParameters: ', searchParameters)

  return (
    <React.Fragment>
      <Wrap>
        <Title>Discover wines</Title>
        <SearchInput />
        <SearchInputButton />
        <CountryFilter />
      </Wrap>
    </React.Fragment>
  )
}

const mapStateToProps = state => {

  return {
    searchParameters: selectSearchParameters(state),
  }
}

export default connect(mapStateToProps, {})(SearchTools)
