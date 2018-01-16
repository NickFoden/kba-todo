import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './contactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    // this.getInputVal = this.getInputVal.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    // const name = getInputVal('name');
    // const company = getInputVal('company');
    // const email = getInputVal('email');
    // const phone = getInputVal('phone');
    // const message = getInputVal('message');
    console.log(123);
  }

  // getInputVal(id) {
  //   return document.getElementById(id).value;
  // }

  render() {
    return (
      <div className="container">
        <div className="wrapper animated BounceInLeft">
          <div className="company-info">
            <h3 className="brand-name">
              {' '}
              K<span>B</span>A
            </h3>{' '}
            <FontAwesome
              className="super-crazy-colors"
              name="rocket"
              size="2x"
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="contact">
            <h3 className="email-us"> Email us</h3>
            <form id="contactForm">
              {/* @todo - validaton for email */}
              <p>
                <label> Name</label>
                <input type="text" name="name" id="name" />
              </p>
              <p>
                <label> Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label> Email Address</label>
                <input type="text" name="email" id="email" />
              </p>
              <p>
                <label> Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p className="full">
                <label> Message</label>
                <textarea name="message" rows="5" id="message" />
              </p>
              <p className="full">
                <button type="submit" onClick={this.submitForm}>
                  {' '}
                  Submit{' '}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
