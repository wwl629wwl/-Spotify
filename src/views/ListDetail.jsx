import React, { lazy, useEffect, useRef, useState } from "react";
import './less/ListDetail.less'
import api from "../api";
import { Image, message, Spin } from "antd";
import spotify from '../assets/spotify.png';
import SpotifyItem from '../components/SpotifyItem';

const ListDetail = function ListDetail(props) {

    /* 从props中结构出需要的属性 */
    const { location } = props;
    console.log(location.state.id);

    /* 定义需要的存储状态 */
    let [listInfo, setListInfo] = useState({}),
        [songList, setSongList] = useState([]),
        [offset, setOffset] = useState(0);

    let loadMore = useRef(null);

    useEffect(() => {
        (async () => {
            let { playlist } = await api.queryListDetail(location.state.id);
            setListInfo(playlist);
            document.title = "每日推荐"
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let { songs, code } = await api.queryAllSongs(location.state.id, offset);
            if (+code !== 200) {
                message.error('请求失败请稍后再试');
                return;
            }
            // console.log(songs)
            songList.push(...songs);
            // console.log(songList);
            setSongList([...songList]);
        })()
    }, [offset])

    useEffect(() => {
        let obj = new IntersectionObserver(changes => {
            let { isIntersecting } = changes[0];
            if (isIntersecting) {
                // 说明加载更多 出现在视图中「也就数触底了」 加载更多数据
                setOffset(offset + 1);
            }
        })
        obj.observe(loadMore.current);
        let loadMoreBox = loadMore.current;
        // 在组件销毁的时候要移除监听器
        return () => {
            obj.unobserve(loadMoreBox);
            obj = null;
        }
    }, [])

    return <div className="list-detail-box">
        {listInfo && <div className="background-container"  >
            <Image src="https://p1.music.126.net/wdT0-1m0OR_D_dhUhakEBg==/109951168393454379.jpg" preview={false} />
            <div className="list-detail">
                <span>歌单</span>
                <h1>{listInfo.name}</h1>
                <span className="list-name">{listInfo.detailPageTitle}</span>
                <div className="songs-sum">
                    <img src={spotify} />
                    <span className="list-name">{listInfo.description}</span>
                </div>
            </div>
        </div>}
        <div className="song-lists">
            {songList.length > 0 ? songList.map((item, index) => {
                let { id, ar, al, dt, name } = item;
                return <SpotifyItem key={index} index={index} id={id} ar={ar} dt={dt} al={al} name={name} />
            }) : null}
        </div>
        <div className="load-more-box" ref={loadMore}
            style={{ display: songList.length > 0 ? "none" : "block" }}>
            <Spin />
            加载更多内容
        </div>
    </div>
}

export default ListDetail;