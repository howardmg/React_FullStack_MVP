import React from "react";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";
import AddButton from "./components/AddButton";
import TodoTable from "./components/TodoTable";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: `Michael's`,
      todoItems: [],
      newToDo: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5555/todos")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        this.setState({
          todoItems: data.map((item) => item),
        });
      });
  }

  render() {
    const updateTable = () => {
      const input = { action: this.state.newToDo, done: false };
      fetch("http://localhost:5555/todos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            todoItems: [...this.state.todoItems, data[0]],
            newToDo: "",
          });
        })
        .catch((error) => console.log(error));
    };

    const taskInput = (event) => {
      this.setState({
        newToDo: event.target.value,
      });
    };

    const updateDone = (todo) => {
      console.log({ todo });
      fetch("http://localhost:5555/todos/changeDoneState", {
        method: "PATCH",
        body: JSON.stringify({ id: todo.id }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            todoItems: this.state.todoItems.map((item) =>
              item.action === todo.action ? { ...item, done: !item.done } : item
            ),
          });
        });
    };

    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />
          <div className="col-12">
            <UserInput clearedInput={this.state.newToDo} callback={taskInput} />
            <AddButton newTodo={updateTable} />
          </div>
          <TodoTable todos={this.state.todoItems} updateDone={updateDone} />
        </div>
      </div>
    );
  }
}

export default App;
