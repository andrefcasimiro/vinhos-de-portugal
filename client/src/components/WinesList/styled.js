// @flow
import styled from "styled-components"
import theme from "global/theme"

export const Wrap = styled.div`
  background: ${theme.color.lighterCreme};
  min-height: 3rem;
`

export const TableWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const Tile = styled.div`
  display: flex;
  width: 16rem;
  height: 21rem;
  background: ${theme.color.lightCreme};
  border: .1rem solid ${theme.color.darkGray};
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: .2s all;

  &:hover {
    transform: translateY(-0.1rem);
    transform: scale(1.02);
    box-shadow: 0 1rem 5rem 0 rgba(0,0,0,0.1);
    position: relative;
    z-index: 10;
    cursor: pointer;
    border: .1rem solid ${theme.color.darkGray};
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-size: 1.4rem;
  color: ${theme.color.veryDarkerGray};
  margin-bottom: .8rem;
`

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${theme.color.darkerGray};
  margin-top: 0;
`

export const Image = styled.div`
  display: flex;
  width: 7.5rem;
  height: 10rem;
  background: ${theme.color.lighterCreme};
  border: .1rem solid ${theme.color.darkGray};
  border-radius: .25rem;
`
