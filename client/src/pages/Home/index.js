// @flow
import React, { useGlobal } from "reactn"
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
import { leftMenu, rightMenu } from "data/navlinks/constants"

const Home = () => {
  const [language] = useGlobal("language")

  return (
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
}

export default Home
