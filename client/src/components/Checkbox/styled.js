// @flow
import styled from "styled-components"
import theme from "global/theme"

export const CheckboxWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7rem;

  &:first-child {
    margin-top: .5rem;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.color.lighterCreme};
  }
`

export const Label = styled.p`
  margin: 0;
  font-size: 1.6rem;
  margin-bottom: .5rem;
  color: ${theme.color.veryDarkerGray};
`

export const CheckboxInput = styled.div`
  border: .1rem solid ${theme.color.veryDarkerGray};
  background: ${theme.color.white};
  width: 2rem;
  height: 2rem;
  display: flex;
`
