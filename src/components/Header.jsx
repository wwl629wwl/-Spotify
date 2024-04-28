import React from "react";
import "./Header.less";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton, Input, Button } from "@mui/material";
import { useNavigate } from "react-router";
// import { Input } from 'antd';
// const { Search } = Input;


const Header = function Header() {

    const navigate = useNavigate();

    const backBtn = () => {
        console.log('1111');
        navigate(-1);
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
            <Input placeholder="搜索 歌曲 歌手 专辑" />
        </div>
        <div className="right">
            <IconButton >
                <PowerSettingsNewIcon color="error" />
            </IconButton>
            <Button variant="contained" color="success" size="large" style={{ backgroundColor: '#67C23A', borderRadius: '25px' }}>登录</Button>
        </div>
    </div>
}

export default Header;