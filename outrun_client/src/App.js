import React from "react"
import {TextField, Button} from "@material-ui/core"

import "./App.css"

// function App() {
//   console.log("functional component called")
//   return (
//     <div>
//       Hello this is a clean fresh react app.
//       <br/>
//       <button>Hello</button>
//       <br/>
//       <br/>
//       <TextField id="standard-basic" label="Username" />
//       <br/>
//       <Button variant="contained" color="primary"> LOGIN </Button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)

    console.log("The constructor for the App Component has been called")

  }
  render(){
    return (
      <div>
        Hello this is a clean fresh react app.
        <br/>
        <button>Hello</button>
        <br/>
        <br/>
        <TextField id="standard-basic" label="Username" />
        <br/>
        <Button variant="contained" color="primary"> LOGIN </Button>
      </div>
    );
  }
}

export default App;
