import React, { Component } from 'react';
import "../../css/edit.css"
import { Form, Select, Input, Button,Icon } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="edit">
                <div className="nav">
                <Icon type="close-circle-o" className="cancel" onClick={()=>this.props.showEditForm(false)}/>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label="账号"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your name!' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="email"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please select your email!' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem   
                            label="电话"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please select your phone!' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="姓名"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please select your username!' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            wrapperCol={{ span: 12, offset: 5 }}
                        >
                            <Button type="primary" htmlType="submit">
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