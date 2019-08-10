// @flow
import styled from "styled-components"
import theme from "global/theme"

export const Wrapper = styled.div`
  position: relative;
  margin-top: 3.5rem;
  z-index: ${theme.zIndices.contextMenu};

`

export const Content = styled.div`
  background: ${theme.color.lightCreme};
  position: absolute;
  top: 0;
  min-width: 20rem;
  min-height: 5rem;
  max-height: 30rem;
  overflow-y: scroll;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
  border: solid 0.1rem ${theme.color.darkGray};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
