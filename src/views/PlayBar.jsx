import React, { useEffect, useState } from "react";
import './less/PlayBar.less';
import { Box, IconButton, LinearProgress } from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';

const PlayBar = function PlayBar() {

    /* 定义需要的状态 */
    let [value, setValue] = useState(0);

    useEffect(() => {

    }, []);

    return <div className="play-bar-box">
        <div className="pic-singer">
            <img src="https://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg" alt="" />
            <div className="singer-name">
                <span className="name">失眠飞行</span>
                <span className="artists">接个吻，开一枪,沈以诚,薛黛霏</span>
            </div>
        </div>
        <div className="play-actions">
            <div className="action-btns">
                <IconButton>
                    <ShuffleIcon />
                </IconButton>
                <IconButton>
                    <SkipPreviousIcon />
                </IconButton>
                <IconButton className="start-btn">
                    <PlayCircleFilledIcon />
                </IconButton>
                <IconButton>
                    <SkipNextIcon />
                </IconButton>
                <IconButton>
                    <RepeatIcon />
                </IconButton>

            </div>
            <div className="progress-bar">
                <span style={{ marginRight: '5px' }}>00:00</span>
                <Box sx={{ width: '70%' }}>
                    <LinearProgress variant="determinate" />
                </Box>
            </div>
        </div>
        <div className="another-actions">

        </div>
    </div>
}

export default PlayBar;