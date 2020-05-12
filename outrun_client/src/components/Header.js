import React from "react"
import {
  Link
} from "react-router-dom"


function Header(props) {

  return (
    <div>
      <div>
        {props.title}
      </div>
      <div>
        <Link to="/">Home</Link>
        | 
        <Link to="/products">Products</Link>
        |
        <Link to="/about">About</Link>
      </div>
    </div>
    
  )

}

export default Header;