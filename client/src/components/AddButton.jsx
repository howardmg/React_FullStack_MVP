import React from "react";

class AddButton extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.newTodo}>
        Add
      </button>
    );
  }
}

export default AddButton;
