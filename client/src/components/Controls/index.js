// @flow
import React from "react"
import { Wrapper, Content, Button } from "./styled"

type Props = {|
  isOpen: boolean,
  close: Function,
|}

const Controls = ({ children, isOpen, close }: Props) => {

  return (
      <Wrapper>
        <Content>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={() => console.log('applying filters')}>Apply</Button>
        </Content>
      </Wrapper>
  )
}

export default Controls
