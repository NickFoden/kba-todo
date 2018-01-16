import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HeaderNav from './Components/headerNav';
import Home from './Components/home';
import ContactForm from './Components/ContactForm';
import AddToDo from './Components/AddToDo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/AddToDo" component={AddToDo} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
