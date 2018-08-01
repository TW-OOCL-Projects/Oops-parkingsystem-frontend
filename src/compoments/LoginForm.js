import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Row ,Col} from 'antd';
import '../css/LoginForm.css'
import axios from "axios"
import requestUrls from "../API/requestUrls"
const FormItem = Form.Item;

class NormalLoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let postData={"userName":values.userName,"password":values.password}
            axios.post(requestUrls,postData)//.employees
                  .then((res) => {
                      alert(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
            if(values.userName==="123"&&values.password==="123"){   
              alert("登录成功")
              localStorage.setItem("access_token", "token123");
              console.log(localStorage.getItem("access_token"))
              const {history}=this.props;
              history.push("/home/employeeMangment")
            }
            console.log('Received values of form: ', values);
          }
        });
      }
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Row type="flex" justify="space-around" align="center">
          <Col span={5}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <h1>请先登录</h1>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
          </Col>
          </Row>
        );
      }
}
const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm