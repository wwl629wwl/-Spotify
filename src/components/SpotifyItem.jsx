import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './SpotifyItem.less';
import { Image, Tooltip } from "antd";
import { timeFormat } from "../api/function";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';

const SpotifyItem = function SpotifyItem() {
    return <div className="spotify-item">
        <div className="index">
            <span>1</span>
            <PlayArrowIcon />
        </div>
        <div className="album-image">
            <Image src="https://p2.music.126.net/h_1u3v9vTCRWN_ZJlVdQkQ==/18523472395121303.jpg" preview={false} />
        </div>
        <div className="album-info">
            <span className="sing-name">
                不用去猜
            </span>
            <span className="singer">
                <a href="">Jony J</a>
            </span>
        </div>

        <div className="album-name">
            不用去猜
        </div>
        <div className="time">
            <div className="add-to-list">
                <Tooltip title='添加到播放列表'>
                    <AddCircleIcon />
                </Tooltip>
            </div>
            <div className="singer-time">
                {timeFormat(213230)}
            </div>
            <div className="choose-more">
                <div className="more-choose">
                    <Tooltip title='更多关于不用去猜的选项'>
                        <span>...</span>
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>
}

SpotifyItem.defaultProps = {
    index: 1,
    albumImgUrl: "https://p2.music.126.net/h_1u3v9vTCRWN_ZJlVdQkQ==/18523472395121303.jpg",
}

export default SpotifyItem;