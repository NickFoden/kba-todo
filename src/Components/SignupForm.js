import React, { Component } from 'react';

class SignupForm extends Component {
    render(){
        return(
            <form>
                <div className="form-field">
                    <label>Email</label>
                    <div>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <div>
                        <input type="password" name="password" />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>    
        )
    }
}

export default SignupForm;

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