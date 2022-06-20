import React from "react";

class UserInput extends React.Component {
  render = () => {
    return (
      <input
        className="form-control"
        value={this.props.clearedInput}
        onChange={this.props.callback}
      />
    );
  };
}

export default UserInput;
