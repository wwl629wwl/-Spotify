import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './SpotifyItem.less';
import { Image, Tooltip } from "antd";
import { timeFormat } from "../api/function";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const SpotifyItem = function SpotifyItem(props) {

    const { dt, name, ar, al, index, id } = props;

    return <div className="spotify-item">
        <div className="index">
            <span>{index + 1}</span>
            <PlayArrowIcon />
        </div>
        <div className="album-image">
            <Image src={al?.picUrl} preview={false} />
        </div>
        <div className="album-info">
            <span className="sing-name">
                {name}
            </span>
            <div className="singer-list">
                <span className="singer">
                    {ar.map(item => {
                        let { id, name } = item;
                        return <NavLink to={`/singer/${id}`} style={{ marginRight: '4px' }} key={id}>{name}</NavLink>
                    })}
                    {/* <a href="">{ar.map(item => item.name)}</a> */}
                </span>
            </div>
        </div>

        <div className="album-name">
            {al?.name}
        </div>
        <div className="time">
            <div className="add-to-list">
                <Tooltip title='添加到播放列表'>
                    <AddCircleIcon />
                </Tooltip>
            </div>
            <div className="singer-time">
                {timeFormat(dt)}
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

/**
 * 定义SpotifyItem
 * @param index 索引
 * @param name 专辑名
 * @param ar 歌手
 * @param dt 时长
 * @param al 专辑名
 * @param id id值
 */
SpotifyItem.defaultProps = {
    index: 1,
    name: "",
    ar: [],
    dt: 0,
    al: {},
    id: 0,
}

SpotifyItem.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    ar: PropTypes.array,
    dt: PropTypes.number,
    al: PropTypes.object,
    id: PropTypes.number
}

export default SpotifyItem;