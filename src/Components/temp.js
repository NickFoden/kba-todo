import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../Actions/todos';
import './addtodo.css';

class temp extends React.Component {
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

  render() {
    return (
      <div className="app">
        <form className="app-intro" onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
            name="text"
            rows="4"
          />
        </form>
        <br />
        {this.props.todos.map(({ text, id }) => <div key={id}>{text}</div>)}
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  { createTodo },
)(temp);
