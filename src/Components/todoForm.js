import React from 'react';
import {saveTodo} from '../Actions';
import './componentStyles.css';

export class TodoForm extends React.Component {
    onSubmit(values) {
        // const {}} = values;
        // const todo= {firstName, email, criticalLevel, todoBody};
        // return this.props
        //     .dispatch(saveTodo(todo));
    }

    render() {
        return (
            <div id="todo-form-div">
                <form className="todo-form" onSubmit={this.onSubmit()}>
                    <label>First Name</label><input type="text" name="firstName"></input>
                    <br/>
                    <label> Critical Level</label>
                        <select name="critical-level">
                            <option />
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                        </select>
                    <br/>    
                    <label> To Do </label>
                    <textarea name="todoBody" rows="10" cols="70"></textarea>        
                </form>
            </div>    
        );
    },
    onSubmit : function(){
        e.preventDefault
        console.log();
    }
}

export default TodoForm;

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