import React from "react";

class TodoRows extends React.Component {
  render() {
    // Creates new todo table rows with state actions and checkbox
    const handleCheckBox = (todo) => {
      this.props.updateDone(todo);
    };

    const handleDelete = (todo) => {
      //console.log(todo);
      this.props.deleteTodo(todo);
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
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(this.props.todo)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoRows;
