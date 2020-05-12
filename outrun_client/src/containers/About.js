import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css"


function About() {

  console.log("functional component called")

  return (
    <div>
      <Header title="HEADING1" />
      <div>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
        ABOUT<br/>
      </div>
      <Footer />
    </div>
  )
}

export default About
