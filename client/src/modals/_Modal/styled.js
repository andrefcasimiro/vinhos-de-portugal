// @flow
import styled, { keyframes } from "styled-components"
import { mq } from "common/mediaQueries"
import theme from "global/theme"

const modalFadeDuration = 250

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  position: fixed;
  z-index: ${theme.zIndices.modal};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  top: 0;
  left: 0;

  animation: ${fadeIn} ${modalFadeDuration}ms ease;
`

export const ModalContainer = styled.div`
  background: ${theme.color.lighterCreme};
  color: ${theme.color.primaryDark};
  display: flex;
  flex-direction: column;
  top: 2rem;
  width: calc(100% - 120px);
  min-height: calc(100% - 400px);
  max-width: 550px;
  box-shadow: 2px 2px 15px 10px rgba(0, 0, 0, 0.2);
  padding-bottom: 4rem;
  margin-bottom: 3rem;
  overflow: auto;
  max-height: calc(100% - 200px);
  border-radius: .2rem;
`

export const ModalHeader = styled.div` /* Includes modal title and red close button */
  background: ${theme.color.lightCreme};
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-height: 7rem;
  border-bottom: .2rem solid ${theme.color.darkGray};
`

export const ModalTitle = styled.h2`

`

export const ModalClose = styled.div`
  position: relative;
  background: ${theme.color.darkRed};
  cursor: pointer;
  color: white;
  padding: 0.25rem;
  text-align: center;
  min-width: 2.25rem;
  transition: 0.2s all;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: -1rem;

  &:hover {
    background: ${theme.color.red};
  }
`

export const ModalContent = styled.div`
  padding: 0.5rem;

  ${mq("max").tabletWide} {
    width: 20rem;
    left: calc(50% - 10.5rem);
  }
`
