import React, { Component } from 'react';




class employeeMangment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    

    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text)=> <p>{text}</p>,
          }, {
            title: "姓名",
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
          }, {
            title: '操作',
            key: 'action',
            render: () => (
              <span >
                <a href="javascript:;">修改</a>
                <Divider type="vertical" />
                <a href="javascript:;">冻结</a>
                {/* <Divider type="vertical" /> */}
                {/* <a href="javascript:;" className="ant-dropdown-link">
                  More actions <Icon type="down" />
                </a> */}
              </span>
            ),
          }];
          
          const data = this.props.employeesList;
          
        return (
            <div>
                I am employeeMangment page
                
            </div>
        );
    }
}

export default employeeMangment;