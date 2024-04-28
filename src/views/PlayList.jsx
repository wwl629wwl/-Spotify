import React, { useEffect, useMemo, useState } from "react";
import './less/PlayList.less';
import api from "../api";
import { message } from "antd";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongItem from "../components/SongItem";

const PlayList = function PlayList(props) {


    const { params } = props;

    /**通过useMemo来进行缓存 避免浪费资源 */
    const type = useMemo(() => {
        let result = '全部';
        switch (params.id) {
            case '1':
                result = '全部';
                break;
            case '7':
                result = '华语';
                break;
            case '8':
                result = '日语'
                break;
            case '96':
                result = '欧美'
                break;
            case '16':
                result = '韩语'
                break;
            default:
                break;

        }
        return result;
    }, [params.id])

    /** 定义所需的状态 */
    let [songs, setSongs] = useState([]);

    /** 请求数据 */
    useEffect(() => {
        (async () => {
            let { data, code } = await api.queryNewSongExpress(params.id);
            if (code !== 200) {
                message.error('数据请求失败');
            }
            setSongs(data);
        })()
    }, [params.id])

    return <div className="playlist-box container">
        <h1 style={{ fontSize: '24px' }}>新歌速递 - {type}</h1>
        <div className="song-table body">
            <div className="tag">
                <span>#</span>
                <span className="name">标题</span>
                <span className="album">专辑</span>
                <AccessTimeIcon fontSize="small" />
            </div>
            {songs.length && songs.map((item, index) => {
                let { album, duration, id, artists, name } = item;
                return <SongItem key={id} album={album}
                    duration={duration} index={index}
                    id={id} artists={artists} albumName={name} />
            })}
        </div>
    </div>
};

export default PlayList;