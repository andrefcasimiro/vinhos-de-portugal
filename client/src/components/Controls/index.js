// @flow
import React from "react"
import { connect } from "react-redux"
import { applySearch } from "data/search/actions"
import { Wrapper, Content, Button } from "./styled"

type Props = {|
  isOpen: boolean,
  close: Function,
  parameterKey: string,
  filters: any,
|}

const Controls = ({ children, isOpen, close, parameterKey, filters, applySearch }: Props) => {
  console.log('parameterKey: ', parameterKey)
  return (
      <Wrapper>
        <Content>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={() => applySearch({[parameterKey]: filters})}>Apply</Button>
        </Content>
      </Wrapper>
  )
}

export default connect(null, { applySearch })(Controls)
