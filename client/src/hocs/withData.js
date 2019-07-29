// withDefaultGraphqlResult
import { branch, compose, renderComponent, withProps } from 'recompose'
import React from 'react'

export default compose(
  branch(
    props => props.data.loading,
    renderComponent(() => <div>Loading...</div>)
  ),
  branch(
    props => props.data.error,
    renderComponent(props => {
      return <div>Error</div>
    })
  ),
  withProps(({ data }) => {
    return data
  })
)
