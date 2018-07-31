import React, { Component } from 'react';
import './App.css';
import Home from "./compoments/home"
// import API from "./API/Example"
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
     <Home/>
    );
  }
}

export default App;
