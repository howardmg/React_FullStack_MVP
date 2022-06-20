import React from "react";

class TodoRows extends React.Component {
  render() {
    // Creates new todo table rows with state actions and checkbox
    const handleCheckBox = (todo) => {
      this.props.updateDone(todo);
    };

    return (
      <tr>
        <td>{this.props.todo.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.todo.done}
            onChange={() => handleCheckBox(this.props.todo)}
          />
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TodoRows;
