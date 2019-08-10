// @flow
import styled from "styled-components"
import theme from "global/theme"

export const Wrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  background: ${theme.color.lightCreme};
  border: .05rem solid ${theme.color.darkGray};
  min-height: 1.5rem;
  justify-content: flex-start;
`

export const Title = styled.h2`
  display: flex;
  font-size: 1.4rem;
  margin: 1rem;
  padding: 0;
  align-items: center;
  color: ${theme.color.veryDarkerGray};
`

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: ${theme.color.veryDarkerGray};
  width: 16rem;
  height: 3rem;
  font-size: 1.4rem;
  border: 0.1rem solid ${theme.color.darkGray};
  border-right: none;
  padding-left: .5rem;
`

export const SearchInputButton = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  align-self: center;
  background: ${theme.color.lightCreme};
  margin: 0 2rem 0 0;
  border: 0.1rem solid ${theme.color.darkGray};
  cursor: pointer;
`
