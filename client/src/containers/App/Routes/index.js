import React from "react"
import { Route } from "react-router-dom"
import Home from "pages/Home"

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
  </React.Fragment>
)

export default Routes
