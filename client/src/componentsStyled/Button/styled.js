// @flow
import styled from "styled-components"
import theme from "global/theme"

export const StyledButton = styled.button`
  display: flex;
  background: ${theme.color.lightCreme};
  font-size: 1.4rem;
  border-radius: .2rem;
  padding: 1rem;
  margin: 1rem;
  border: .1rem solid ${theme.color.darkGray};

  cursor: pointer;

  &:hover {
    background: ${theme.color.lighterCreme};
  }
`