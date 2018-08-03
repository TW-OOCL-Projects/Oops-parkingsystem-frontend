import React, { Component } from 'react';
import 'antd/dist/antd.css';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:JSON.parse(localStorage.getItem("userInfo")) 
    }
  }
  render() {
    const userInfo = this.state.userInfo
    return (
     <div>
       <p style={{textAlign:"center",marginTop:"15rem",color:"#1890ff",fontSize:"2rem"}}>
        欢迎来到Oops停车管理系统
       {userInfo&&userInfo.role&&userInfo.role.role==="parkingboy"&& <p>(您暂无操作权限)</p>}
       </p>
     </div>
    );
  }
}

export default Welcome;