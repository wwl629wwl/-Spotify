import React from "react";
import './Sider.less';
import { Image } from "antd";
import logo from '../assets/svg/logo.svg';
import MemoryIcon from '@mui/icons-material/Memory';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import http from "../api/http";
import api from '../api/index.js';


const Sider = function Sider() {

    /** 点击登录的方法 */
    const clickLogin = async () => {
        try {
            let res = await fetch('/user/account').then(data => {
                return data.json()
            }).then(data => {
                return data;
            });

            console.log(res);
            let data = await http.get('/user/account');
            let data1 = await api.queryUserInfo();
            console.log(data1);
            console.log(data);
            // api.queryUserInfo();
        } catch (_) { }
    }

    return <div className="main-sider-box" >
        {/* 在a标签内部包裹一个div 标签 那么 a标签的宽度和高度都会被这个div标签撑开 */}
        <a href="" className="logo-a">
            <Image src={logo} preview={false} />
        </a>
        <ul className="fix-content">
            <li><MemoryIcon />首页</li>
            <li><StarBorderIcon />我的收藏</li>
        </ul>
        <Divider style={{ width: '80%' }} />
        <div className="content">
            <h5 className="title">你的歌单</h5>

            <div className="unlogin-box">
                <h3>未登录</h3>
                <Divider />
                <Button variant="contained" color="success"
                    style={{ backgroundColor: '#67C23A' }} onClick={clickLogin}>点此登录</Button>
            </div>
        </div>
    </div>


}

export default Sider;