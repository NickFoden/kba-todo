import React from "react";
import { connect } from "react-redux";

const ListTodo = props => (
  <div>
    <h2>List Todo</h2>
    {this.props.todos.map(({ todo, issueUid, completed, urgency }) => (
      <div className="todo-card" key={issueUid}>
        <ul>
          <li>{todo}</li>
          <li>
            <input
              onChange={() => this.handleComplete(id)}
              type="checkbox"
              value={completed}
            />
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
        </ul>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos.currentTodosProps
});
export default connect(mapStateToProps)(ListTodo);
