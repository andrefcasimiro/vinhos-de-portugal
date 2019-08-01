// @flow
import styled from "styled-components"
import theme from "global/theme"

export const Wrapper = styled.div`
  background: ${theme.color.lightCreme};
  position: absolute;
  bottom: 0;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
  border: solid 0.1rem ${theme.color.darkGray};
`

export const Content = styled.div`
  font-size: 1.6rem;
  background: none;
  border: none;
  overflow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  min-width: 20rem;
  background: ${theme.color.lightCreme};
  border: 0.1rem solid ${theme.color.darkGray};
  margin-left: -.2rem;
  margin-top: .1rem;

  
  & > *:first-child {
    &:hover {
      border-right: .1rem solid ${theme.color.darkGray};
    }
  }
  & > *:last-child {
    &:hover {
      border-left: .1rem solid ${theme.color.darkGray};
    }
  }
`

export const Button = styled.button`
  font-size: 1.6rem;
  background: none;
  border: none;
  overflow: none;
  width: 100%;
  padding: .8rem;
  cursor: pointer;
  color: ${theme.color.darkerGray};

  &:hover {
    background: ${theme.color.lighterCreme};
    color: ${theme.color.veryDarkerGray};
  }
`
