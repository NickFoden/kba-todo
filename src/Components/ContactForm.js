import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="brand-name">
          {' '}
          <span> K</span>BA
        </h2>
        <div className="contact">
          <form>
            <p>
              <label> Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label> Company</label>
              <input type="text" name="company" />
            </p>
            <p>
              <label> Email Address</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label> Phone Number</label>
              <input type="text" name="phone" />
            </p>
            <p className="full">
              <label> Message</label>
              <textarea name="message" rows="5" />
            </p>
            <p>
              <button className="full"> Submit </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
