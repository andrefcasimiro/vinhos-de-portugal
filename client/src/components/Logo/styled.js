// @flow
import styled from "styled-components"
import theme from "global/theme"
import { mqMax } from "common/mediaQueries"

export const LogoContainer = styled.h1`
  display: flex;
  justify-content: center;
  color: ${theme.color.white};
  font-size: 8.2rem;

  ${mqMax.tabletWide} {
    margin-bottom: -2rem;
    font-size: 6rem;
  }

  ${mqMax.tablet} {
    margin-bottom: -2rem;
    font-size: 5rem;
  }

  ${mqMax.phoneWide} {
    margin-bottom: -2rem;
    font-size: 4rem;
  }

  ${mqMax.phone} {
    margin-bottom: -2rem;
    font-size: 3.5rem;
  }
`
