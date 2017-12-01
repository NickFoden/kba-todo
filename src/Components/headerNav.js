import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './componentStyles.css'

const HeaderNav = (props) => {
    return  (
        <div>
            <ul>
                <li><Link to='/'> Home</Link></li>    
                <li><Link to='/addTodo'> Add a todo</Link></li>
            </ul>    
        </div>    
    );
};

export default connect()(HeaderNav);