import React from 'react';

class Switch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        condition: "On"
      }
  
      this.on = this.on.bind(this)
      this.off = this.off.bind(this)
    }
  
    on() {
      this.setState({ condition: "On"})
    }
  
    off() {
      this.setState({ condition: "Off"})
    }
  
    render() {
      return(
        <div>
          <h3>This switch is {this.state.condition}</h3>
          <button onClick= {this.on}>On</button>
          <button onClick= {this.off}>Off</button>
        </div>
      )
    }
   
  }

  export default Switch;