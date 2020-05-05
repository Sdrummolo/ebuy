import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import EbuyState from "./context/EbuyState"

ReactDOM.render(
  <EbuyState>
    <App />
  </EbuyState>,
  document.getElementById("root")
)
