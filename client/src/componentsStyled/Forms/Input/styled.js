import styled from "styled-components"
import theme from "global/theme"

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin: 1rem;
`

export const Label = styled.p`
  font-size: 1.5rem;
  color: ${theme.color.primaryDark};
  margin: .5rem 0;
`

export const Error = styled.p`
  font-size: 1.3rem;
  color: ${theme.color.red};
`

export const StyledInput = styled.input`
  display: flex;
  flex-grow: 2;
  font-size: 1.6rem;
  width: 100%;
  min-height: 3.5rem;
  padding: .5rem;
  border: .1rem solid ${theme.color.darkGray};

  &::focus {
    border: .2rem solid ${theme.color.darkGray};
  }
`
