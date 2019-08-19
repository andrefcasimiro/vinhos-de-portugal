// @flow
import styled from "styled-components"
import theme from "global/theme"
import { mq } from "common/mediaQueries"

export const LogoContainer = styled.h1`
  display: flex;
  justify-content: center;
  color: ${theme.color.white};
  font-size: 8.2rem;

  ${mq("max").tabletWide} {
    margin-bottom: -2rem;
    font-size: 6rem;
  }

  ${mq("max").tablet} {
    margin-bottom: -2rem;
    font-size: 5rem;
  }

  ${mq("max").phoneWide} {
    margin-bottom: -2rem;
    font-size: 4rem;
  }

  ${mq("max").phone} {
    margin-bottom: -2rem;
    font-size: 3.5rem;
  }
`
