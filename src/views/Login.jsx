import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Divider } from '@mui/material';
import { Form, Input, message } from 'antd';
import React, { useEffect, useState } from "react";
import './less/Login.less';
// import { CheckBox } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import api from '../api';
import _ from '../assets/utils.js';
import { connect } from 'react-redux';
import action from '../store/action';

const loginWays = [
    { icon: <GoogleIcon style={{ color: '#882B23' }} />, text: '使用Google登录' },
    { icon: <FacebookIcon style={{ color: '#1877F2' }} />, text: '使用Facebook登录' },
    { icon: <AppleIcon />, text: '使用Apple登录' },

]
const validate = {
    phone(_, value) {
        value = value.trim();
        let reg = /^(?:(?:\+|00)86)?1\d{10}$/;
        if (value.length === 0) return Promise.reject(new Error('手机号是必填项'));
        // 正则校验
        if (!reg.test(value)) return Promise.reject(new Error('手机号格式错误'));
        return Promise.resolve();
    },
    code(_, value) {
        value = value.trim();
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (value.length === 0) return Promise.reject(new Error('密码是必填项!'));
        if (!reg.test(value)) return Promise.reject(new Error('密码格式有误!'));
        return Promise.resolve();
    }
}
const Login = function Login(props) {

    const { navigate, navigateToLogin } = props;

    /* 定义需要的状态 */
    let [isChecked, setIsChecked] = useState(false);
    const [formInfo] = Form.useForm();

    const login = async () => {
        console.log(11);
        console.log(formInfo.getFieldsValue());
        try {
            await formInfo.validateFields();
            let { phone, password } = formInfo.getFieldsValue();
            let { code, token, cookie } = await api.login(phone, password);
            console.log(code, token);
            if (+code !== 200) {
                message.error('登录失败');
                formInfo.resetFields();
                return;
            }
            /* 将token和cookie 保存到本地的localstorage中 */
            _.storage.set('tk', token);
            _.storage.set('cookie', cookie);
            message.success('登录成功');
            navigate('/', { replace: true });
            navigateToLogin(false);
        } catch (_) { }
    }

    const rememberMe = () => {

    }

    useEffect(() => {

    }, [])

    return <div className="login-box">
        <div className="login-container">
            <h1>登录到Spotify</h1>
            <ul className="login-by-orther-way">
                {loginWays.map((item, index) => {
                    let { icon, text } = item;
                    return <li className="way-item" key={index}>
                        <Button>
                            {icon}
                            <span>{item.text.toLocaleLowerCase()}</span>
                        </Button>
                    </li>
                })}
            </ul>
            <Divider />
            <div className="login-form">
                <Form
                    layout='vertical'
                    name="basic"
                    form={formInfo}
                >
                    <Form.Item
                        label="电子邮箱或手机号"
                        style={{ content: 'none' }}
                        name="phone"
                        rules={[{
                            required: true,
                            message: '手机号错误',
                            validator: validate.phone
                        },]}
                    >
                        <Input placeholder='电子邮箱或手机号' />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{
                            required: true,
                            message: '密码错误',
                            validator: validate.code
                        },]}
                    >
                        <Input.Password placeholder='密码' />
                    </Form.Item>

                </Form>
                <div className="remember-me">
                    <Checkbox value={isChecked} onChange={(event) => {
                        setIsChecked(event.target.checked);
                    }} /> 记住我
                    {/* <Checkbox {...label} defaultChecked /> */}
                </div>
                <div className='login-btn'>
                    <Button onClick={login}>登录</Button>
                </div>

            </div>
        </div>
    </div >
}

export default connect(
    null,
    { ...action.toLogin }
)(Login);