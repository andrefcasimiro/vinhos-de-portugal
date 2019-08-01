// @flow
import styled, { css } from "styled-components"
import theme from "global/theme"

export const StyledButton = styled.button`
  display: flex;
  background: ${theme.color.lightCreme};
  font-size: 1.4rem;
  border-radius: .2rem;
  padding: .5rem;
  margin: .5rem;
  border: .1rem solid ${theme.color.darkGray};
  color: ${theme.color.veryDarkerGray};
  cursor: pointer;

  &:hover {
    background: ${theme.color.lighterCreme};
  }

  ${p => p.active && css`
      background: ${theme.color.lighterCreme};
    `}
`
