// @flow
import styled from "styled-components"
import theme from "global/theme"
import wine_glass from "assets/images/wine_glass.jpeg"

export const NavbarContainer = styled.div`
  background: ${theme.color.darkRed};
  background: linear-gradient(to bottom, rgba(109,0,0, 0) 0%,
              rgba(0,0,0, .7)), url(${wine_glass});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: center center;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
