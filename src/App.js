import React, { Component } from 'react';
import './App.css';
import Home from "./compoments/home"
import Login from "./compoments/LoginForm"
// import API from "./API/Example"
import { Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{height:"100%"}}>
         <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      </div>
    //  <Home/>
    );
  }
}

export default App;
