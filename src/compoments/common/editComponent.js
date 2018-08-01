import React, { Component } from 'react';
import "../../css/edit.css"
import { Form, Select, Input, Button, Icon } from 'antd';
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
                this.props.submitForm(values)
                this.props.showEditForm(false)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="edit">
                <div className="nav">
                    <Icon type="close-circle-o" className="cancel" onClick={() => this.props.showEditForm(false)} />
                    <Form onSubmit={this.handleSubmit}>
                        {
                            Object.keys(this.props.dataFormat).map(i => {
                                return <FormItem
                                    label={i}
                                    labelCol={{ span: 5 }}
                                    wrapperCol={{ span: 12 }}
                                >
                                    {getFieldDecorator(`${i}`, {
                                        rules: [{ required: true, message: `Please input your ${i}!` }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            })
                        }
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