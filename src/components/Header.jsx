import React, { useEffect, useState } from "react";
import "./Header.less";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton, Button } from "@mui/material";
import { AutoComplete, Image, Tooltip } from 'antd';
import { useNavigate } from "react-router";
import { connect } from 'react-redux';
import action from '../store/action'


const Header = function Header(props) {

    /* 从props中结构出Redux中的方法 */
    const { setSearchWords, navigateToLogin, base: { profile, loginState } } = props;

    const navigate = useNavigate();

    /* 定义所需的方法 */
    const backBtn = () => {
        console.log('1111');
        navigate(-1);
    }

    const inputChangeValue = (value) => {
        // setSearchWords(event.target.value);

        if (value === "" || value === undefined) {
            console.log(111);
            navigate('/', { replace: true });
            return;
        }
        navigate(`/search`, {
            replace: true,
            state: {
                keywords: value,
                type: 1
            }
        })
    }



    return <div className="header-box fixed">
        <div className="left-btn">
            <IconButton onClick={backBtn}>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={() => {
                navigate(1);
                console.log(111)
            }}>
                <ChevronRightIcon />
            </IconButton>
            {/* <Search placeholder="搜索 歌曲 歌手 专辑" /> */}
            <AutoComplete placeholder="搜索 歌曲 歌手 专辑"
                allowClear onChange={inputChangeValue}
            />
        </div>
        <div className="right">
            <IconButton >
                <PowerSettingsNewIcon color="error" />
            </IconButton>
            {!loginState ? <Button variant="contained"
                onClick={() => {
                    navigate('/login', { replace: true });
                    navigateToLogin(true);
                }}
                color="success" size="large"
                style={{ backgroundColor: '#67C23A', borderRadius: '25px' }}>
                登录</Button>
                :
                <Tooltip title='couqiao' onClick={() => {
                    navigate('/personal', { replace: true });
                }}>
                    <Image src={!profile?.avatarUrl ? "http://p2.music.126.net/0Fh7mRqNG5KQbYDuQ_L2Zg==/3393092916160738.jpg" : ""} preview={false} />
                </Tooltip>


            }


        </div>
    </div>
}

export default connect(
    state => {
        return {
            base: state.base,
        }
    },
    { ...action.search, ...action.toLogin }
)(Header);