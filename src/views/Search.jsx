import React, { useEffect, useState } from "react";
import './less/Search.less';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryBar from '../components/CategoryBar';
import api from "../api";
import SongItem from "../components/SongItem";

const Search = function Search(props) {

    console.log(props);
    const { location, } = props;

    /* 定义需要存储的状态 */
    let [results, setResults] = useState([]),
        [type, setType] = useState(1);

    /* 传递给子组件的回调函数 */
    const changeType = (type) => {
        setType(type);
    }

    const switchTypeToResult = (type, results) => {
        let result = [];
        switch (type) {
            case 1:
                result = results?.songs;
                break;
            case 10:
                result = results?.albums;
                break;
            case 100:
                result = results?.artists;
            case 1000:
                result = results?.playlists;
            default:
                result = [];
        }
        return result;
    }

    useEffect(() => {
        (async () => {
            let { result, code } = await api.querySearchResult(`${location.state.keywords}`, type);

            let finalResult = switchTypeToResult(type, result);
            if (type === 100) {
                setResults(result.artists);
                return;
            } else if (type === 1000) {
                setResults(result.playlists);
                return;
            }
            if (+code === 200) {
                setResults(finalResult);
            }
        })()
        // (async () => {
        //     let { result, code } = await api.querySearchResult(`薛`, 100);
        //     console.log(result);
        //     let finalResult = switchTypeToResult(type, result);
        //     if (+code === 200) {
        //         setResults(finalResult);
        //     }
        // })()
    }, [location, type])

    return <div className="search-box">
        <div className="song-table body">
            <CategoryBar changeType={changeType} />
            <div className="tag">
                <span>#</span>
                <span className="name">{type === 100 ? '艺人' : '标题'}</span>
                <span className="album">{type === 1000 ? '歌单' : "专辑"}</span>
                <AccessTimeIcon fontSize="small" />
            </div>
            {results.length && results.map((item, index) => {
                let { album, duration, id, artists, name, coverImgUrl } = item;
                return <SongItem key={id} album={album}
                    duration={duration} index={index}
                    id={id} artists={artists} albumName={name} artistName={name} artistsItem={item} coverImgUrl={coverImgUrl} />
            })}
        </div>
    </div>
}

export default Search;