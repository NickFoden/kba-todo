import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HeaderNav from './Components/headerNav';
import Home from './Components/home';
import SignupForm from './Components/SignupForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
            <Route path="*" component={Home} />
            <Route exact path="/signup" component={SignupForm}/>
            
        </div>
      </Router>  
    );
  }
}

export default connect()(App);
