import React, { Component } from "react";
import { connect } from "react-redux";
import {
  completedTodo,
  createTodo,
  deletedTodo,
  deletedAllCompletedTodo
} from "../Actions/todos";
import "./addtodo.css";

class AddToDo extends Component {
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleComplete = id => {
    this.props.completedTodo(id);
  };
  handleDelete = id => {
    this.props.deletedTodo(id);
  };

  handleDeleteAllCompleted = () => {
    this.props.deletedAllCompletedTodo();
  };

  render() {
    return (
      <div className="container">
        <h2>Add To Do</h2>
        <div className="form-div">
          <form id="addToDo-form" onSubmit={this.handleSubmit}>
            <p>
              <label> To Do </label>
            </p>
            <p>
              <input
                type="text"
                name="text"
                rows="4"
                onChange={this.handleChange}
                value={this.state.text}
              />
            </p>

            <p>
              <button type="submit"> Submit </button>
            </p>
          </form>
        </div>
        <hr />
        <br />
        {this.props.todos.map(({ text, id, completed }) => (
          <div className="todo-card" key={id}>
            <ul>
              <li>{text}</li>
              <li>
                <input
                  onChange={() => this.handleComplete(id)}
                  type="checkbox"
                  value={completed}
                />
              </li>
              <li>
                <button onClick={() => this.handleDelete(id)}> Delete</button>
              </li>
              <li>
                <label>Urgency</label>
              </li>
              <li>
                <select name="urgency">
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="red">Red</option>
                </select>
              </li>
            </ul>
          </div>
        ))}
        <br />
        <hr />
        <br />
        <button onClick={this.handleDeleteAllCompleted}>
          {" "}
          Delete All Completed{" "}
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { completedTodo, createTodo, deletedTodo, deletedAllCompletedTodo }
)(AddToDo);
