import React, { Component } from "react";
import { connect } from "react-redux";
import {
  completedTodo,
  createATodo,
  deleteTodo,
  deletedAllCompletedTodo
} from "../Actions/todos";
import "./addtodo.css";

class AddToDo extends Component {
  state = {
    text: "",
    userId: "",
    urgency: "Green"
  };

  handleSubmit = e => {
    e.preventDefault();

    createATodo(this.state.text, this.state.userId, this.state.urgency);
    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleComplete = id => {
  //   completedTodo(id);
  // };
  // handleDelete = id => {
  //   deleteTodo(id);
  // };

  // handleDeleteAllCompleted = () => {
  //   deletedAllCompletedTodo();
  // };

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
        {this.props.todos.map(({ todo, issueUid, completed, urgency }) => (
          <div className="todo-card" key={issueUid}>
            <ul>
              <li>
                <input
                  onChange={() => this.handleComplete(issueUid)}
                  type="checkbox"
                  value={completed}
                />
              </li>
              <li>
                <button onClick={() => this.handleDelete(issueUid)}>
                  {" "}
                  Delete
                </button>
              </li>
              <li>
                <label>Urgency</label>
              </li>
              <li>
                <select name="urgency">
                  <option value={urgency}>{urgency}</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="red">Red</option>
                </select>
              </li>
              <li>{todo}</li>
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

const mapStateToProps = state => ({
  todos: state.todos.currentTodosProps
});

export default connect(mapStateToProps)(AddToDo);
