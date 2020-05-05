import React, {Component} from "react"
import {TextField, Button} from "@material-ui/core"

class Home extends Component {

  constructor(props){
    super(props)

    this.btnClicked = this.btnClicked.bind(this)

    this.state = {
      counter: props.initialCount,
      backgroundColor: "red"
    }

  }

  btnClicked() {
    console.log("button clicked")
  
    
    
    this.setState((state, props) => {

      let newBackgroundColor
      newBackgroundColor = (this.state.backgroundColor === "blue") ? "red" : "blue"

      return {
        counter: state.counter++,
        backgroundColor: newBackgroundColor
      }
    })
  }

  render(){

    return (
      <div style={{backgroundColor: this.state.backgroundColor}}>
        {this.state.counter}
        <br/>
        <TextField id="standard-basic" label="Username" />
        <Button variant="contained" color="primary" onClick={this.btnClicked}> HOME PAGE HERE! </Button>
        <br/>
      </div>
    )

  }
  
}

export default Home;