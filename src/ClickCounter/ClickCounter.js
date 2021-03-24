import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  onClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        Click Count: {this.state.counter}
        <br />
        <br />
        <button onClick={() => this.onClick()}>Click Me!</button>
      </div>
    );
  }
}

export default ClickCounter;
