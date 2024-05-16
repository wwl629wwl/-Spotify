import React, { lazy, useEffect } from "react";
import './less/ListDetail.less'
import api from "../api";

const ListDetail = function ListDetail(props) {

    /* 从props中结构出需要的属性 */
    const { location } = props;
    console.log(location.state.id);

    /* 定义需要的存储状态 */


    useEffect(() => {
        (async () => {
            let { playlist } = await api.queryListDetail(location.state.id);
            console.log(playlist);
        })()
    }, [])

    return <div className="list-detail-box">
        <div className="background-container" style={{ backgroundImage: `url(https://p1.music.126.net/5aZ64TRdJlpbV35Q6wd3rg==/109951168782685368.jpg)` }} >

        </div>
    </div>
}

export default ListDetail;