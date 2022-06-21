import React from "react";
import TodoRows from "./TodoRows";

class TodoTable extends React.Component {
  render() {
    const emptyMessage = "Add an item to your to do list";

    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.length > 0 ? (
              this.props.todos.map((item) => (
                <TodoRows
                  key={item.id}
                  todo={item}
                  updateDone={this.props.updateDone}
                  deleteTodo={this.props.deleteTodo}
                />
              ))
            ) : (
              <tr>
                <td>{emptyMessage}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoTable;
