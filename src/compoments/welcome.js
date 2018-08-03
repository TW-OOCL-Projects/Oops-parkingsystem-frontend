import React, { Component } from 'react';
import 'antd/dist/antd.css';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
     <div>
       <p style={{textAlign:"center",marginTop:"15rem",color:"#1890ff",fontSize:"2rem"}}>
        欢迎来到Oops停车管理系统
       </p>
     </div>
    );
  }
}

export default Welcome;