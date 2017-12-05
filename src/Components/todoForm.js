import React from 'react';
import {connect} from 'react-redux';
import {saveTodo} from '../Actions';
import './componentStyles.css';
import { createReadStream } from 'fs';

export class TodoForm extends React.Component {
    onSubmit(values) {
        console.log(values + ' Values')
        // const {}} = values;
        // const todo= {firstName, email, criticalLevel, todoBody};
        // return this.props
        //     .dispatch(saveTodo(todo));
        // onSubmit : function(){
        //     e.preventDefault
        //     console.log();
        // }
    }

    render() {
        return (
            <div id="todo-form-div">
                <form className="todo-form" onSubmit={this.onSubmit()}>
                    <label for="first-name">First Name</label><input type="text" name="first-name" id="first-name"></input>
                    <br/>
                    <label for="critical-label"> Critical Level</label>
                        <select name="critical-level" id="critical-level">
                            <option />
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                        </select>
                    <br/>    
                    <label for="todo-body"> To Do </label>
                    <textarea name="todo-body" id="todo-body" rows="10" cols="70"></textarea> 
                    <button type="submit">Add ToDo</button>       
                </form>
            </div>    
        );
    }
}

export default connect()(TodoForm);

// <input type="text" name="firstName"></input>
// <input
//     type="text"
    
//     >
// </input>
// <input name="criticalLevel">
//     <option />
//     <option value="#00ff00">Green</option>
//     <option value="#f3f977">Yellow</option>
//     <option value="#ff0000">Red</option>
// </input>
// <input type="textarea">
// </input> 
// <button
//     type="submit"
//     disabled={this.props.pristine || this.props.submitting}>
//     Register
// </button>