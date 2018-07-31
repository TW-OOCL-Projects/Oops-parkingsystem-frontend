import React, { Component } from 'react';
import { Divider,Table  } from 'antd'



class employeeMangment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
componentWillMount(){
    this.props.onGetAllEmployees()
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
              </span>
            ),
          }];
          
        const data = this.props.employeesList;
          
        return (
            <div>
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
            </div>
        );
    }
}

export default employeeMangment;