import React, { setGlobal } from "reactn"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
// Apollo
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import App from "containers/App"
import { languages } from "data/languages/constants"
import { sessionItems } from "data/sessions/constants"
// Redux
import { Provider } from "react-redux"
import { store, persistor } from "./global/store"
import { PersistGate } from "redux-persist/es/integration/react"
// Font
import FontFaceObserver from "fontfaceobserver"
import { defaultFont } from "global/config"
import "assets/fonts/index.css"

const graphqlURI = `http://localhost:5000/graphql`
const headers = `authorization: Bearer`

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: graphqlURI, headers }),
})

const fontObserver = new FontFaceObserver(defaultFont, {})
fontObserver.load()
  .then(result => {
    const body = document.body
    body && body.classList.add("fontLoaded")
  })
  .catch(e => console.log(e.message))

setGlobal({
  language: localStorage.getItem(sessionItems.LANGUAGE) || languages.PORTUGUESE,
})

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
