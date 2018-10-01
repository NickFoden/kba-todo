import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getAllTodos } from "./Actions/todos";
import "./App.css";
import HeaderNav from "./Components/headerNav";
import Home from "./Components/home";
import ContactForm from "./Components/ContactForm";
import AddToDo from "./Components/AddToDo";
import Register from "./Components/Register";

class App extends Component {
  componentDidMount() {
    getAllTodos();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/AddToDo" component={AddToDo} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
