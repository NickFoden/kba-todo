import React, { Component } from 'react';
import './contactForm.css';
import FontAwesome from 'react-fontawesome';

class ContactForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper animated BounceInLeft">
          <div className="company-info">
            <h3 className="brand-name">
              {' '}
              <span> K</span>BA
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
      </div>
    );
  }
}

export default ContactForm;
