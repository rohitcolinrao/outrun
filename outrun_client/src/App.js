import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./App.css"


function App() {
  console.log("functional component called")

  const menuItems = {
    nav1: "Home",
    nav2: "Products",
    nav3: "About Us"
  }

  return (

    <div>

      <Header  title="HEADING1" nav={menuItems} />

      <Home initialCount="15" />

      <Footer />

    </div>

  )
}

export default App;
