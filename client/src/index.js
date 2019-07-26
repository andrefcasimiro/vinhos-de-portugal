import React, { setGlobal } from "reactn"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "containers/App"
import { languages } from "data/languages/constants"
import FontFaceObserver from "fontfaceobserver"
import { defaultFont } from "global/config"
import "assets/fonts/index.css"

const fontObserver = new FontFaceObserver(defaultFont, {})
fontObserver.load()
  .then(result => {
    const body = document.body
    body && body.classList.add("fontLoaded")
  })
  .catch(e => console.log(e.message))

setGlobal({
  language: languages.PORTUGUESE,
})

const element = document.getElementById("root")

if (element) {
  render(
      <Router>
        <App />
      </Router>,
    element,
  )
}
