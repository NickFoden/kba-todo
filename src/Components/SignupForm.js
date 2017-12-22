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
   git
    submit(values){
        console.log(values.username)
        return axios.post(`${API_BASE_URL}/user/${values.username}`,{
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