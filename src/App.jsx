import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.rtl.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Settings } from "./setting"
import { Home } from "./pages/Home"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Home />{" "}
      </Router>
    </div>
  )
}

export default App
