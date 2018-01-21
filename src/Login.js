import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './SignUp.css';
import { NavLink } from 'react-router-dom';


const FormItem = Form.Item;

class LoginOld extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios({
                    method: 'post',
                    url: '/login',                                           //URL to be modified here
                    data: { name: values.userName, pass: values.password },
                    config: { headers: { 'Content-Type': 'application/json' } }
                })
                    .then(function (response) {
                        console.log('Successful post request');
                        console.log(response);
                        window.location.assign("/home");

                    })
                    .catch(function (response) {
                        console.log('Unsuccessful post request');
                        console.log(response);

                    });
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
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


                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
          </Button>
                    Or <NavLink to="/register">register now!</NavLink>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(LoginOld);


export default Login;