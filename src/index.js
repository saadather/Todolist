import React, { Component } from "react";
import "./app.css";
import { Todo } from "./components/todo";
import { TodoList } from "./components/todoList";
import { addTodo, findById, toggleTodo, updatedTodo } from "./lib/todoHelper";
class App extends Component {
  state = {
    todos: [
      { id: "1", name: "Value 1", completed: true },
      { id: "2", name: "Value 2", completed: false }
    ],
    currentTodo: ""
  };
  handleToggle = id => {
    const idTodo = findById(id, this.state.todos);
    const toggle = toggleTodo(idTodo);
    const update = updatedTodo(this.state.todos.toggle);
    this.setState({
      todos: update
    });
  };
  handleOnSubmit = evt => {
    evt.preventDefault();
    const newId = () => Math.random;
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      completed: false
    };
    const updateTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updateTodos,
      currentTodo: ""
    });
  };
  handleInputChange = evt => {
    this.setState({
      currentTodo: evt.target.value
    });
  };
  handleError = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: "This value is invalid"
    });
  };
  render() {
    const submitHandle = this.state.currentTodo
      ? this.handleOnSubmit
      : this.handleError;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To do list</h1>
        </header>
        <Todo
          handleOnSubmit={submitHandle}
          handleInputChange={this.handleInputChange}
          currentTodo={this.currentTodo}
        />
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
