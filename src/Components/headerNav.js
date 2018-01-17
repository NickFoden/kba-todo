import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './componentStyles.css';

const HeaderNav = () => (
  <div>
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/contact"> Contact</Link>
      </li>
      <li>
        <Link to="/AddToDo"> Add To Do</Link>
      </li>
      <li>
        <Link to="/register"> Register</Link>
      </li>
    </ul>
  </div>
);

export default connect()(HeaderNav);
