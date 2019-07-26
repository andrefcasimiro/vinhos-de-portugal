// @flow
import styled, { css } from "styled-components"
import theme from "global/theme"

export const LanguageMenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  padding: 1rem;
  justify-content: center;
`

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  padding: .5rem;
  color: ${theme.color.white};

  ${props => props.active &&
    css`
      background: ${theme.color.darkerRed};
    `
  }

  &:hover {
    text-decoration: underline;
  }
`
