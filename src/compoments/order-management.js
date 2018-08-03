import React, { Component } from 'react';
import { Modal,Button,Table, Select,  Menu, Dropdown, message, Input, Row, Col , Radio} from 'antd'
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const RadioGroup = Radio.Group;
class orderManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: "id",
            availableParkingBoy:[],
            visible: false,
            value: 1,
            radios:[],
            id:1,
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            value: e.target.value,
        });
    }
    handleOk = (e) => {
        this.props.onPostOrderToParkingBoy(this.state.id,this.state.value);
        this.setState({
            visible: false,
        });

    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    getAllAvailableBoys = (id)=>{
        this.props.onGetAvailableBoys(this.updateState,id);

    }
    updateState = (availableBoys,id) =>{

        let radios = [];
        for(let i = 0;i<availableBoys.length;i++){
            radios.push( <Radio  key ={i} value={availableBoys[i].id} >{availableBoys[i].name}</Radio>);
        }
        console.log(id);
        this.setState({availableParkingBoy:availableBoys,radios,id});
        console.log(this.state.id)
        this.showModal();
    }
    componentWillMount() {
        this.props.onGetAllOrders();
    }

    setSeachType = (e) => {
        this.setState({
            searchType: e
        })
    }

    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
            {title: '车牌号',
                dataIndex: 'carId',
                key: 'carId'},
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type'
            },
            {title: '状态',
                dataIndex: 'status',
                key: 'status'},
            {
                title: '操作',
                key: 'action',
                render: (e) => {
                    const {id, operation} = e
                    return <span>
                     <a href="javascript:;" onClick={()=>this.getAllAvailableBoys(id)}>{operation}</a>
                </span>
                },
            }];

        const data = this.props.ordersList;
        // const Search = Input.Search;

        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{marginBottom:"2rem"}}>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <InputGroup compact>
                            <Select defaultValue="id" style={{ width: "100px" }} onChange={this.setSeachType}>
                                <Option value="id">id</Option>
                                <Option value="carId">车牌号</Option>
                                <Option value="type">类型</Option>
                                <option value="status">状态</option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="示例文字"
                            enterButton="搜索"
                            // onSearch={value => console.log(value)}
                            onSearch={value => this.props.onSearchOrders({
                                searchType: this.state.searchType,
                                searchValue: value
                            })}
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
                <div>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            {this.state.radios}
                        </RadioGroup>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default orderManagement;