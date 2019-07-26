import React from "react"
import Routes from "./Routes"
import { GlobalStyle } from "global/global-styles"

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  )
}

export default App
