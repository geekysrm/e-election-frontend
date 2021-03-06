import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './SignUp.css';
import { NavLink } from 'react-router-dom';


const FormItem = Form.Item;

class SignUpOld extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && (values.password===values.cpassword)) {
                console.log('Received values of form: ', values);
                axios({
                    method: 'post',
                    url: '/signup',                                           //URL to be modified here
                    data: { name: values.userName, pass: values.password },
                    config: { headers: { 'Content-Type': 'application/json' } }
                })
                    .then(function (response) {
                        console.log('Successful post request');
                        console.log(response);
                        window.location.assign("/login");
                        //TODO: where to place "successfully registered, please login"
                      
                    })
                    .catch(function (response) {
                        console.log('Unsuccessful post request');
                        console.log(response);
                        alert('Sorry! Server Error!');
                    });
            }
           
         
                if ((values.password !== values.cpassword)&&(values.password.length>=8))
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
                        rules: [{ required: true, message: 'Please input a Password!' }, {min:8, message: 'Minimum length of password is 8!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('cpassword', {
                        rules: [{ required: true, message: 'Please confirm the Password!' },{enum: 'hello', message:"must be hello"}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                        )}
                </FormItem>
                <FormItem>
                  
                   
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                    Or <NavLink to="/login">login here!</NavLink>
                </FormItem>
            </Form>
        );
    }
}

const SignUp = Form.create()(SignUpOld);


export default SignUp;