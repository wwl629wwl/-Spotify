import MemoryIcon from '@mui/icons-material/Memory';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import api from '../api/index.js';
import logo from '../assets/svg/logo.svg';
import './Sider.less';
import SiderItem from "./SiderItem.jsx";
import { connect } from 'react-redux';


const Sider = function Sider(props) {

    /* 从props中结构需要的属性 */
    const { base: { loginState } } = props;

    /* 定义需要的状态 */
    let [lists, setLists] = useState([]);


    const navigate = useNavigate();
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

    useEffect(() => {
        (async () => {
            if (!loginState) {
                return;
            }
            let { playlist } = await api.queryUserPlayList(341128295);
            let result = playlist.filter(item => item.userId === 341128295);
            setLists(result);
        })()
    }, [loginState])

    return <div className="main-sider-box" >
        {/* 在a标签内部包裹一个div 标签 那么 a标签的宽度和高度都会被这个div标签撑开 */}
        <a href="" className="logo-a">
            <Image src={logo} preview={false} />
        </a>
        <ul className="fix-content">
            <li onClick={() => { navigate('/', { replace: true }) }}><MemoryIcon />首页</li>
            <li onClick={() => { navigate('/store', { replace: true }) }} ><StarBorderIcon />我的收藏</li>
        </ul>
        <Divider style={{ width: '80%' }} />
        <div className="content">

            <h5 className="title">你的歌单</h5>
            <div className="album-lists">
                {lists.length > 0 ? lists.map((item, index) => {
                    let { id, name, coverImgUrl } = item;
                    return <SiderItem name={name} coverUrl={coverImgUrl} key={index} id={id} />
                }) : null}
            </div>
            {loginState ? null : <div className="unlogin-box">
                <h3>未登录</h3>
                <Divider />
                <Button variant="contained" color="success"
                    style={{ backgroundColor: '#67C23A' }} onClick={clickLogin}>点此登录</Button>
            </div>}
        </div>
    </div>


}

export default connect(
    state => {
        return {
            base: state.base
        }
    }
)(Sider);