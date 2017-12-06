import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';
import formValidator from './formValidator';
import axios from 'axios';
import {API_BASE_URL} from '../config';

const constraints = {
    email: {email: true},
    password: { length: {minimum:2}}
}

class SignupForm extends Component {
   
    submit(values){
        console.log(values.username)
        return axios.post(`${API_BASE_URL}`,{
            username : values.username
        } ).then(results => {
            console.log(results);
        })
    }
    
    render(){
        const {submitting, handleSubmit} = this.props;
    
        return(
            <form onSubmit={handleSubmit(this.submit)} >
                <Field name="username" component={FormField} label="username" />
                {/* <Field name="todo" component={FormField} label="todo" /> */}
                <button type="submit" disabled={submitting}>Submit</button>
            </form>    
        )
    }
}

export default reduxForm({
    form: 'SignupForm',
    validate: formValidator(constraints)
})(SignupForm);

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