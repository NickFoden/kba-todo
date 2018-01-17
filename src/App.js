import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HeaderNav from './Components/headerNav';
import Home from './Components/home';
import ContactForm from './Components/ContactForm';
import AddToDo from './Components/AddToDo';
import ListTodo from './Components/ListTodo';
import temp from './Components/temp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/AddToDo" component={AddToDo} />
          <Route exact path="/ListToDo" component={ListTodo} />
          <Route exact path="/temp" component={temp} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
