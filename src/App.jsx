import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.rtl.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, RouterProvider } from "react-router-dom"
import { Routs } from "./pages/allRouts"
function App() {
  return (
    <div className="App">
      <RouterProvider router={Routs} />
    </div>
  )
}

export default App
