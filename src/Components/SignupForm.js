import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';

class SignupForm extends Component {
   
    submit(values){
        console.log('Values', values)
    }
    
    render(){
        console.log(this.props)
        const {submitting, handleSubmit} = this.props;
    
        return(
            <form onSubmit={handleSubmit(this.submit)} >
                <Field name="email" component={FormField} label="Email" />
                <Field name="password" component={FormField} type="password" label="password" />
                <button type="submit" disabled={submitting}>Submit</button>
            </form>    
        )
    }
}

export default reduxForm({
    form: 'SignupForm'
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