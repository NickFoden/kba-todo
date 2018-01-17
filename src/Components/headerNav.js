import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './componentStyles.css';

const HeaderNav = props => (
  <div>
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/contact"> Contact</Link>
      </li>
      <li>
        <Link to="/AddToDo"> Add ToDo</Link>
      </li>
      <li>
        <Link to="/ListToDo"> List ToDo</Link>
      </li>
      <li>
        <Link to="/temp"> Temp</Link>
      </li>
    </ul>
  </div>
);

export default connect()(HeaderNav);
