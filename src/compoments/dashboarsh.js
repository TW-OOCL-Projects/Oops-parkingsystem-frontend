import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Progress ,Row,Col,Pagination } from 'antd';
const Panel = Collapse.Panel;
class Dashboarsh extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.props.onGetAllParkingLotsInDashboard()
    }
    render() {
        return (
            <div >
             <Row type="flex" justify="space-between">
                 <Col span={8} style={{marginBottom:"15px"}}>   
                    <div style={{width:"250px"}}>
                        <Collapse defaultActiveKey={['1']} >
                        <Panel showArrow={false} header="停车场A" key="1">  
                        <Row type="flex" justify="space-around" align="middle">
                            <Progress type="circle" percent={30} width={80} format={percent=>`${percent/10} /10`} />
                            <span>停车员：张三</span>   
                        </Row>
                        <p style={{marginLeft:"20px"}}>停车场情况</p>
                        </Panel>
                        </Collapse>   
                    </div>
                </Col>
                    <Col span={8}>
                        <div style={{width:"250px"}}>
                        <Collapse defaultActiveKey={['1']} >
                        <Panel showArrow={false} header="停车场A" key="1">  
                        <Row type="flex" justify="space-around" align="middle">
                            <Progress type="circle" percent={30} width={80} format={percent=>`${percent/10} /10`} />
                            <span>停车员：张三</span>   
                        </Row>
                        <p style={{marginLeft:"20px"}}>停车场情况</p>
                        </Panel>
                        </Collapse>   
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{width:"250px"}}>
                        <Collapse defaultActiveKey={['1']} >
                        <Panel showArrow={false} header="停车场A" key="1">  
                        <Row type="flex" justify="space-around" align="middle">
                            <Progress type="circle" percent={30} width={80} format={percent=>`${percent/10} /10`} />
                            <span>停车员：张三</span>   
                        </Row>
                        <p style={{marginLeft:"20px"}}>停车场情况</p>
                        </Panel>
                        </Collapse>   
                        </div>
                    </Col>

                    <Col span={8}>
                        <div style={{width:"250px"}}>
                        <Collapse defaultActiveKey={['1']} >
                        <Panel showArrow={false} header="停车场A" key="1">  
                        <Row type="flex" justify="space-around" align="middle">
                            <Progress type="circle" percent={30} width={80} format={percent=>`${percent/10} /10`} />
                            <span>停车员：张三</span>   
                        </Row>
                        <p style={{marginLeft:"20px"}}>停车场情况</p>
                        </Panel>
                        </Collapse>   
                        </div>
                    </Col>

                   

                    

                    
            </Row>
            {/* <Pagination defaultCurrent={1} total={50} /> */}
            </div>
        );
    }
}

export default Dashboarsh;