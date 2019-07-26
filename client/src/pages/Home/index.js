// @flow
import React, { useGlobal } from "reactn"
import Navbar from "components/Navbar"
import Logo from "components/Logo"
import LanguageMenu from "components/LanguageMenu"
import SecondaryNavbar from "components/SecondaryNavbar"
import Navlinks from "components/Navlinks"
import Grid from "componentsStyled/Grid"
import { getText } from "data/dictionary/helpers"
import { leftMenu, rightMenu } from "data/navlinks/constants"

const Home = () => {
  const [language] = useGlobal("language")

  return (
    <React.Fragment>
      <Navbar>
        <Logo>
          {getText(language, "logo")}
        </Logo>
        <LanguageMenu />
      </Navbar>
      <SecondaryNavbar>
        <Grid>
          <Navlinks menu={leftMenu} />
          <Navlinks menu={rightMenu} />
        </Grid>
      </SecondaryNavbar>
    </React.Fragment>
  )
}

export default Home
