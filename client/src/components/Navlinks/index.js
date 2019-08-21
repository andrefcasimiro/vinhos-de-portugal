// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import { connect } from "react-redux"
import Group from "componentsStyled/Group"
import { getText } from "data/dictionary/helpers"
import { selectLanguage } from "data/languages/selectors"
import Navlink from "./Navlink"

type Props = {|
  menu: Array<Object>,
|}

const Navlinks = ({ menu, language }) => (
  <Group>
    {Object.values(menu).map((option, index) => {
      return (
        <Navlink to={option.path} key={index}>
          {getText(language, option.key, option.subkey)}
        </Navlink>
      )
    })}
  </Group>
)

const mapStateToProps = state => {
  const language = selectLanguage(state)

  return {
    language,
  }
}

const enhancer: HOC<*, Props> = compose(
  connect(mapStateToProps),
)

export default enhancer(Navlinks)
