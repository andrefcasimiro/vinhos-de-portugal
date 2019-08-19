// @flow
import React from "react"
import { withStateHandlers } from "recompose"

type Added = {|
  isOpen: boolean,
  toggleOpen: void => mixed,
|}

function withOpen<T>(
  // $ExpectError
  WrappedComponent: Component<{ ...$Exact<T>, ...$Exact<Added> }>,
  // $ExpectError
): Component<T> {
  const enhance = withStateHandlers(
    {
      isOpen: false,
    },
    {
      toggleOpen: ({ isOpen }) => () => ({ isOpen: !isOpen }),
    },
  )

  return enhance(
    ({ isOpen, toggleOpen, ...rest }) => (
      <WrappedComponent isOpen={isOpen} toggleOpen={toggleOpen} {...rest} />
    )
  )
}

export default withOpen
