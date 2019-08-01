// @flow
import React, { useGlobal } from "reactn"
import CountryFilter from "components/Filters/CountryFilter"
import {
  Wrap,
  Title,
  SearchInput,
  SearchInputButton,
} from "./styled"

type Props = {|
  children: React.Node,
|}

const SearchTools = ({ children }: Props) => {
  const [searchState, setSearchState] = useGlobal("searchState")

  console.log(
    'search state:',
    searchState,
  )
  return (
    <React.Fragment>
      <Wrap>
        <Title>Discover wines</Title>
        <SearchInput />
        <SearchInputButton />
        <CountryFilter searchState={searchState} filter={setSearchState} />
      </Wrap>
    </React.Fragment>
  )
}

export default SearchTools
