import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeComp from "../components/Home"
import "../App.css"


function Home() {
  console.log("functional component called")

  return (


    <div>

      <Header  title="HEADING1" />

      <HomeComp initialCount="15" />

      <Footer />

    </div>

  )
}

export default Home
