import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <form>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    );
  }
}

export default SignupForm;
