import React from "react"
import Home from "./containers/Home"
import Products from "./containers/Products"
import About from "./containers/About"
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {


  return (

    <Router>
      <Switch>

        <Route path="/products">
          <Products/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App


