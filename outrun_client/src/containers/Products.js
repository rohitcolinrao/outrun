import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css"


function Products() {

  console.log("functional component called")

  return (

    <div>

      <Header title="HEADING1" />
      <div>
        Here is the new products page
      </div>
      <Footer />
    </div>

  )
}

export default Products
