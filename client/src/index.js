// @flow
import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloProvider } from "react-apollo" // Apollo
import client from "global/graphql/apolloClient"
import App from "containers/App"
import { Provider } from "react-redux" // Redux
import { store, persistor } from "./global/store"
import { PersistGate } from "redux-persist/es/integration/react"
import FontFaceObserver from "fontfaceobserver" // Font
import { defaultFont } from "global/config"
import "assets/fonts/index.css"

const fontObserver = new FontFaceObserver(defaultFont, {})
fontObserver.load()
  .then(result => {
    const body = document.body
    body && body.classList.add("fontLoaded")
  })
  .catch(event => console.log(event.message))

const element = document.getElementById("root")

if (element) {
  render(
    <ApolloProvider client={client}>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </PersistGate>
    </ApolloProvider>,
    element,
  )
}
