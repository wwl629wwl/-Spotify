import React from "react";
import "./Header.less";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton, Button } from "@mui/material";
import { Input } from 'antd';
import { useNavigate } from "react-router";
import { connect } from 'react-redux';
import action from '../store/action'


const Header = function Header(props) {

    /* 从props中结构出Redux中的方法 */
    const { setSearchWords } = props;

    const navigate = useNavigate();

    /* 定义所需的方法 */
    const backBtn = () => {
        console.log('1111');
        navigate(-1);
    }

    const inputChangeValue = (event) => {
        setSearchWords(event.target.value);
        // console.log(event.target.value);
    }

    return <div className="header-box fixed">
        <div className="left-btn">
            <IconButton onClick={backBtn}>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            {/* <Search placeholder="搜索 歌曲 歌手 专辑" /> */}
            <Input placeholder="搜索 歌曲 歌手 专辑" allowClear onChange={inputChangeValue} />
        </div>
        <div className="right">
            <IconButton >
                <PowerSettingsNewIcon color="error" />
            </IconButton>
            <Button variant="contained"
                onClick={() => {
                    navigate('/login', { replace: true });
                }}
                color="success" size="large" style={{ backgroundColor: '#67C23A', borderRadius: '25px' }}>登录</Button>
        </div>
    </div>
}

export default connect(
    null,
    { ...action.search }
)(Header);