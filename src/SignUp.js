import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './SignUp.css';

const FormItem = Form.Item;

class SignUpOld extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && (values.password===values.cpassword)) {
                console.log('Received values of form: ', values);
                axios({
                    method: 'post',
                    url: '/signup',
                    data: { name: values.userName, pass: values.password },
                    config: { headers: { 'Content-Type': 'application/json' } }
                })
                    .then(function (response) {
                        console.log('Successful post request');
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log('Unsuccessful post request');
                        console.log(response);
                    });
            }
            if (!(values.password === values.cpassword))
            {
                alert('Please enter the same password in both fields!');
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input an username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input a Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('cpassword', {
                        rules: [{ required: true, message: 'Please confirm the Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                        )}
                </FormItem>
                <FormItem>
                  
                   
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                    Or <a href="/login">login here!</a>
                </FormItem>
            </Form>
        );
    }
}

const SignUp = Form.create()(SignUpOld);


export default SignUp;