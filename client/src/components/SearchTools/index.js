// @flow
import React, { useGlobal } from "reactn"
import SearchButton from "./SearchButton"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
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
  const [language] = useGlobal("language")

  return (
    <React.Fragment>
      <Wrap>
        <Title>Discover wines</Title>
        <SearchInput /><SearchInputButton />
        <SearchButton>
          Country
        </SearchButton>
      </Wrap>
    </React.Fragment>
  )
}

export default SearchTools
