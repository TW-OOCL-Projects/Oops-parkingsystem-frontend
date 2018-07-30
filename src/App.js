import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import API from "./API/Example"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tips:""
    }
  }
componentDidMount(){
}

  render() {
    return (
      <div >
        <button onClick={()=>API.example()}>HELLO WORLD</button>
        {this.state.tips}
      </div >
    );
  }
}

export default App;
