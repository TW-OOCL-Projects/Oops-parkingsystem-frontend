import React, { Component } from 'react';
import "../../css/edit.css"
import { Form, Input, Button, Icon, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role:this.props.dataFormat["role"] ? this.props.dataFormat["role"] :"parkingboy"
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.role = this.state.role
                this.props.submitForm(values)
                this.props.showEditForm(false)
            }
        });
    }
    setRole=(e)=>{
        this.setState({
            role :e
        })
        console.log(e)
    }
    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 5 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
            },
          };
          
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="edit">
                <div className="nav">
                    <Icon type="close-circle-o" className="cancel" onClick={() => this.props.showEditForm(false)} />
                    <Form onSubmit={this.handleSubmit}>
                        {
                            Object.keys(this.props.dataFormat).map((i, index) => {
                                if(i!=="role"){
                                    return <FormItem
                                    label={i}
                                    labelCol={{ span: 5 }}
                                    wrapperCol={{ span: 12 }}
                                    key={index}
                                >
                                    {getFieldDecorator(`${i}`, {
                                        rules: [{
                                            required: true, message: `Please input your ${i}!`
                                        }],
                                        initialValue: this.props.dataFormat[i]
                                    })(
                                        <Input disabled={i === "id"||i==="username" ? true : false} />

                                    )}

                                </FormItem>
                                }

                            })
                        }
                        {this.props.dataFormat["role"] && <FormItem
                            {...formItemLayout}
                            label="role"
                            hasFeedback
                        >
                            <Select disabled={this.props.dataFormat["role"]==="admin"?true:false} defaultValue={this.props.dataFormat["role"]} onChange={this.setRole}>
                                <Option value="manager">manage</Option>
                                <Option value="parkingboy">parkingboy</Option>
                            </Select>
                        </FormItem>}
                        <FormItem
                            wrapperCol={{ span: 12, offset: 5 }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Submit
          </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrappedTimeRelatedForm = Form.create()(Edit);
export default WrappedTimeRelatedForm; 