import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.tick = this.tick.bind(this);
    this.timerId = null;
  }

  tick() {
    this.setState(function (prevState) {
      console.log("Ticking", prevState.counter + 1);
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.tick}>Tick</button>
      </>
    );
  }
}

export default Clock;
