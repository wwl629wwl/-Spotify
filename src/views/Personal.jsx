import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Image, message } from "antd";
import React, { useEffect, useState } from "react";
import api from "../api";
import './less/Personal.less';

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
        [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        (async () => {
            let { profile, code } = await api.queryUserInfo();
            if (+code !== 200) {
                message.error('网络错误，请刷新再次请求');
                return;
            }
            setUserInfo(profile);
        })()
    }, [])

    /* 定义需要的函数 */
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div className="personal-box">
        <div className="head">
            <Image src="http://p2.music.126.net/0Fh7mRqNG5KQbYDuQ_L2Zg==/3393092916160738.jpg" preview={false} />
            <div className="username">
                <span>个人资料</span>
                <span onClick={handleOpen}>凑巧</span>
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
                    </Box>
                </Modal>
            </div>

        </div>

        {/* 
             <Modal title='个人资料详情' open={modalShow}
                    style={{ backgroundColor: '#121212' }}
                    onCancel={modelCancel} onOk={modelConfirm} >
                    <div className="upload-img">
                        <PersonIcon />
                        <div className="hover-actions">
                            <span>选择照片</span>
                            <ModeEditIcon />
                            <span>删除照片</span>
                        </div>
                    </div>
                </Modal>
        */}

    </div>
}

export default Personal;