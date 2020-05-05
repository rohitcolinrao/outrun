import React from "react"

function Header(props) {

  return (
    <div>
      <div>
        {props.title}
      </div>
      <div>
        {props.nav.nav1} 
        | 
        {props.nav.nav2}
        |
        {props.nav.nav3}
      </div>
    </div>
    
  )

}

export default Header;