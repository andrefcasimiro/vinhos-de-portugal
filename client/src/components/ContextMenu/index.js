// @flow
import React from "react"
import { compose, type HOC, withStateHandlers, withHandlers, lifecycle } from "recompose"
import { Wrapper, Content } from "./styled"

type Props = {|
  children: React.Node,
  isOpen: boolean,
  close: Function,
|}

const ContextMenu = ({ children, isOpen, close, modalReference }) => isOpen
  ? <Wrapper ref={modalReference}>
      <Content>{children}</Content>
    </Wrapper>
  : null

const enhancer: HOC<*, Props> = compose(
  withStateHandlers(
    {
      modalReference: React.createRef(),
    },
    {

    },
  ),
  withHandlers({
    handleClickOutside: props => event => {
      const current = props.modalReference.current

      if (current && !current.contains(event.target)) {
        return props.close()
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('mousedown', this.props.handleClickOutside)
    },
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.props.handleClickOutside)
    },
  })
)

export default enhancer(ContextMenu)
