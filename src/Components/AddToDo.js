import React from 'react';
import './addtodo.css';

class AddToDo extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Add To Do</h2>
        <div className="form-div">
          <form id="addToDo-form">
            <p>
              <label> To Do </label>
            </p>
            <p>
              <textarea rows="4" />
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
      </div>
    );
  }
}

export default AddToDo;
