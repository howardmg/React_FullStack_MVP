import React, { Component } from "react";

class LifeCycle extends Component {
  componentWillUnmount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div className="App">
        <h1>Life Cycle</h1>
      </div>
    );
  }
}

export default LifeCycle;
