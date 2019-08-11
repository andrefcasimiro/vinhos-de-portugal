// @flow
import React from "react"
import { compose, type HOC, withHandlers } from "recompose"
import { connect } from "react-redux"
import { applySearch } from "data/search/actions"
import { Wrapper, Content, Button } from "./styled"

type Props = {|
  isOpen: boolean,
  close: Function,
  parameterKey: string,
  filters: any,
|}

const Controls = ({
  children,
  isOpen,
  close,
  parameterKey,
  filters,
  handleApply,
}) => {

  return (
      <Wrapper>
        <Content>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={() => handleApply({[parameterKey]: filters})}>Apply</Button>
        </Content>
      </Wrapper>
  )
}

const enhancer: HOC<*, Props> = compose(
  connect(null, { applySearch }),
  withHandlers({
    handleApply: props => value => {
      props.close()
      return props.applySearch(value)
    }
  }),
)

export default enhancer(Controls)
