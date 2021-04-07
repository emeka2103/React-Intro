import "./App.css";
import React from "react";
import Switch from "./Switch";
import Clock from "./Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };

    this.toggleShowClock = this.toggleShowClock.bind(this);
  }

  toggleShowClock() {
    this.state(function (prevState) {
      return {
        showClock: !prevState.showClock,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <Switch />
        {this.state.showClock ? <Clock /> : null}
        <button onClick={this.toggleShowClock}>Toggle Clock</button>
      </div>
    );
  }
}

export default App;
