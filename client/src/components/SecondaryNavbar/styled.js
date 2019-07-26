// @flow
import styled from "styled-components"
import theme from "global/theme"

export const SecondaryNavbarContainer = styled.div`
  background: ${theme.color.darkGray};
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentWrap = styled.div`
  padding: 1rem;

  /* Add some margin space between links */
  > * a {
    margin-right: 1rem;
  }
`
