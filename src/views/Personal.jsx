import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonIcon from '@mui/icons-material/Person';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Image, message, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import api from "../api";
import './less/Personal.less';
import SpotifyItem from '../components/SpotifyItem';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 200,
    minWidth: 300,
    backgroundColor: '#282828',
    opacity: 1,
    borderRadius: 4,
    p: 4
};

const Personal = function Personal() {

    /**
     * 定义需要的状态
     */
    let [userInfo, setUserInfo] = useState({}),
        [username, setUsername] = useState(''),
        [allData, setAllData] = useState([]);

    useEffect(() => {
        (async () => {
            let { profile, code } = await api.queryUserInfo();
            if (+code !== 200) {
                message.error('网络错误，请刷新再次请求');
                return;
            }
            let { allData } = await api.queryUserRecord(profile.userId);
            setUsername(profile?.nickname);
            setUserInfo(profile);
            setAllData(allData);
        })()
    }, [])

    useEffect(() => {

    }, [])

    /* 定义需要的函数 */
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setUsername(userInfo?.nickname);
        setOpen(false);

    };

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const updateUserInfo = async () => {
        // console.log(username);
        let { code } = await api.updateUserInfo(username);
        if (+code !== 200) {
            message.error('修改失败，请稍后再试');
        }
        message.success('修改成功');
        setOpen(false);
    }

    return <div className="personal-box">
        <div className="head">
            <Image src="http://p2.music.126.net/0Fh7mRqNG5KQbYDuQ_L2Zg==/3393092916160738.jpg" preview={false} />
            <div className="username">
                <span>个人资料</span>
                <span onClick={handleOpen}>{username}</span>
            </div>
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h1 className='modal-title'>个人资料详情</h1>
                        <div className="info-container">
                            <div className="upload-img">
                                <div className="personal-img">
                                    <PersonIcon />
                                </div>
                                <div className="hover-actions">
                                    <span>选择照片</span>
                                    <ModeEditIcon />
                                    <span>删除照片</span>
                                </div>
                            </div>
                            <div className="change-info">
                                <TextField value={username} label="昵称" variant="outlined" onChange={changeUsername} />
                                <Button variant='contained' onClick={updateUserInfo}>更改</Button>
                            </div>
                        </div>
                        <span style={{ color: "#fff" }}>继续下一步，则表示你已同意 Spotify 获取你选择上传的图像。请确保你有上传此图像的权利。</span>
                    </Box>
                </Modal>
            </div>
        </div>
        <div className="more">

            <Tooltip title={`关于${username}的更多信息`}>
                ...
            </Tooltip>
        </div>
        <div className="personal-play-list">
            <h1>播放记录</h1>
            <span>仅自己可见</span>
        </div>
        <div className="all-song-table">
            {allData.length > 0 ? allData.map((item, index) => {
                let { name, ar, dt, al, id } = item?.song
                return <SpotifyItem key={index + id} index={index} name={name} ar={ar} al={al} dt={dt} />
            }) : null}
        </div>
    </div>
}

export default Personal;