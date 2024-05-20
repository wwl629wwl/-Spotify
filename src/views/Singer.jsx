import React, { useEffect, useState } from "react";
import './less/Singer.less';
import api from "../api";
import { Col, message, Row } from "antd";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SpotifyItem from "../components/SpotifyItem";
import PlayListCard from "../components/PlayListCard";
import AvatarCard from "../components/AvatarCard";

const Singer = function Singer(props) {

    /* 从属性中结构出需要的东西 */
    const { location, params } = props;

    // console.log(props);
    console.log(params)


    /* 定义需要的状态 */
    let [singerInfo, setSingerInfo] = useState({}),
        [hotSongs, setHotSongs] = useState([]),
        [more, setMore] = useState(false),
        [albums, setAlbums] = useState([]),
        [mvs, setMvs] = useState([]),
        [simiArtists, setSimiArtists] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let { hotSongs, artist } = await api.querySingerDetail(params.id);
                let { hotAlbums } = await api.querySingerAlbum(params.id);
                let { mvs } = await api.querySingerMV(params.id);
                let { artists } = await api.querySimilarSinger(params.id);
                setSingerInfo(artist);
                setHotSongs(hotSongs.slice(0, 10));
                setAlbums(hotAlbums.slice(0, 5));
                setMvs(mvs.slice(0, 5));
                setSimiArtists(artists.slice(0, 5));
            } catch (_) { }
        })()
    }, []);


    return <div className="singer-box">
        {singerInfo ? <div className="backgroud-image" style={{ backgroundImage: `url(${singerInfo.picUrl})` }}>
            <div className="singer-info">
                <span className="is-certification">
                    <VerifiedIcon style={{ color: '#3D91F4' }} /> 认证艺人
                </span>
                <h1 className="singer-name">{singerInfo.name}</h1>
                <span className="brief-desc" >
                    {singerInfo?.briefDesc}
                </span>
            </div>
        </div> : null}
        <div className="play-follow">
            <div className="play-btn">
                <Button>
                    <PlayArrowIcon color="black" />
                </Button>
            </div>
            <div className="follow">
                <Button style={{ color: "#fff" }}>
                    关注
                </Button>
            </div>
            <div className="more">
                <span>...</span>
            </div>
        </div>
        <div className="hot-songs">
            <h1>热门</h1>
            <div className="song-lists" style={{ height: `${more ? "540px" : "270px"}` }}>
                {hotSongs.length > 0 ? hotSongs.map((item, index) => {
                    let { id, ar, al, dt, name } = item;
                    return <SpotifyItem key={id + index} index={index} id={id} name={name} ar={ar} al={al} dt={dt} />
                }) : null}
            </div>
            <Button onClick={() => {
                setMore(!more);
            }} variant="contained" >{more ? "收起" : "查看更多"}</Button>
        </div>
        <div className="album-lists">
            <div className="header">
                <h1>唱片目录</h1>
                <span>查看全部</span>
            </div>
            <Row>
                {albums.length > 0 ? albums.map((item, index) => {
                    let { picUrl, name, id } = item;
                    const key = `col+${index}`;
                    return <Col key={key}
                        xs={{
                            flex: '100%',
                        }}
                        sm={{
                            flex: '30%',
                        }}
                        md={{
                            flex: '30%',
                        }}
                        lg={{
                            flex: '20%',
                        }}
                        xl={{
                            flex: '20%',
                        }}
                    >
                        <PlayListCard imgUrl={picUrl} title={name} id={id} type={1} />
                    </Col>
                }) : null}
            </Row>
        </div>
        {singerInfo ? <div className="album-mv">
            <div className="header">
                <h1>{`演出者:${singerInfo.name}`}</h1>
                <span>查看全部</span>
            </div>
            <Row>
                {mvs.length > 0 ? mvs.map((item, index) => {
                    let { imgurl, name, id } = item;
                    const key = `col+${index}`;
                    return <Col key={key}
                        xs={{
                            flex: '100%',
                        }}
                        sm={{
                            flex: '30%',
                        }}
                        md={{
                            flex: '30%',
                        }}
                        lg={{
                            flex: '20%',
                        }}
                        xl={{
                            flex: '20%',
                        }}
                    >
                        <PlayListCard imgUrl={imgurl} title={name} id={id} type={2} />
                    </Col>
                }) : null}
            </Row>
        </div> : null}
        <div className="fans-like">
            <div className="header">
                <h1>粉丝也喜欢</h1>
                <span>查看全部</span>
            </div>
            <Row>
                {simiArtists.length > 0 ? simiArtists.map((item, index) => {
                    let { picUrl, name, id } = item;
                    const key = `col+${index}`;
                    return <Col key={key}
                        xs={{
                            flex: '100%',
                        }}
                        sm={{
                            flex: '30%',
                        }}
                        md={{
                            flex: '30%',
                        }}
                        lg={{
                            flex: '20%',
                        }}
                        xl={{
                            flex: '20%',
                        }}
                    >
                        <AvatarCard imgUrl={picUrl} title={name} id={id} />
                    </Col>
                }) : null}
            </Row>
        </div>
    </div>
}

export default Singer;