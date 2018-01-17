import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedTodo, createTodo, deletedTodo, deletedAllCompletedTodo } from '../Actions/todos';
import './addtodo.css';

class AddToDo extends React.Component {
  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({
      text: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
              <label>Urgency</label>
            </p>
            <p>
              <select name="urgency">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
              </select>
            </p>
            <p>
              <button type="submit"> Submit </button>
            </p>
          </form>
        </div>
        <br />
        {this.props.todos.map(({ text, id, completed }) => (
          <div key={id}>
            {text}
            <input onChange={() => this.handleComplete(id)} type="checkbox" value={completed} />
            <button onClick={() => this.handleDelete(id)}> Delete</button>
          </div>
        ))}
        <br />
        <hr />
        <br />
        <button onClick={this.handleDeleteAllCompleted}> Delete All Completed </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  { completedTodo, createTodo, deletedTodo, deletedAllCompletedTodo },
)(AddToDo);
