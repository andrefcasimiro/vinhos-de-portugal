// @flow
import React from "react"
import { connect } from "react-redux"
import { compose, type HOC } from "recompose"
import Navbar from "components/Navbar"
import Logo from "components/Logo"
import LanguageMenu from "components/LanguageMenu"
import SecondaryNavbar from "components/SecondaryNavbar"
import Navlinks from "components/Navlinks"
import UserTools from "components/UserTools"
import SearchTools from "components/SearchTools"
import WinesList from "components/WinesList"
import Grid from "componentsStyled/Grid"
import Content from "componentsStyled/Content"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
import { selectLanguage } from "data/languages/selectors"
import { leftMenu, rightMenu } from "data/navlinks/constants"

const Home = ({ language }) => (
  <React.Fragment>
    <Navbar>
      <Logo>
        {getText(language, dictionaryKeys.LOGO)}
      </Logo>
      <LanguageMenu />
    </Navbar>
    <SecondaryNavbar>
      <Grid>
        <Navlinks menu={leftMenu} />
        <Navlinks menu={rightMenu} />
      </Grid>
    </SecondaryNavbar>
    <Content>
      <UserTools />
      <SearchTools />
      <WinesList />
    </Content>
  </React.Fragment>
)

const mapStateToProps = state => {
  const language = selectLanguage(state)

  return {
    language,
  }
}

const enhancer: HOC<*, {||}> = compose(
  connect(mapStateToProps),
)

export default enhancer(Home)
