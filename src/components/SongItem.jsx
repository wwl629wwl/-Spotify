import { Image } from "antd";
import React from "react";
import './SongItem.less';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { timeFormat } from "../api/function";
import PropTypes from 'prop-types';

const SongItem = function SongItem(props) {

    const { album, duration, index, id, artists, albumName } = props;
    // console.log(typeof popularity)

    return <div className="song-content">
        <div className="song-intro">
            <span className="index-num">{index + 1 >= 10 ? index + 1 : '0' + (index + 1)}</span>
            <Image src={album?.blurPicUrl} preview={false} width='50px' />
            <div className="song-details">
                <h4>{album?.name}</h4>
                <span>{artists[0]?.name}</span>
            </div>

        </div>
        <div className="album">
            {albumName}
        </div>
        <div className="operate">
            <PlayCircleIcon />
        </div>
        <div className="time">
            {timeFormat(duration)}
        </div>
    </div>
}

/** 做属性验证 */
SongItem.defaultProps = {
    album: {},
    duration: 0,
    id: 0,
    index: 0,
    artists: [],
    albumName: ''
}

SongItem.propTypes = {
    album: PropTypes.object,
    duration: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
    artists: PropTypes.array,
    albumName: PropTypes.string
}

export default SongItem;