import React, { useEffect, useState } from "react";
import './less/Home.less';
import { useNavigate } from "react-router";
import api from '../api/index.js';
import PlayListCard from "../components/PlayListCard.jsx";
import { Col, Row } from "antd";


/* 首页分类表点击跳转到相应的二级路由页面 */
const categoryList = [{
    title: '全部',
    id: 0
}, {
    title: '华语',
    id: 7
}, {
    title: '日本',
    id: 8
}, {
    title: '欧美',
    id: 96
}, {
    title: '韩国',
    id: 16
}];

const Home = function Home(props) {


    const { navigate } = props;
    /* 跳转到相应的二级路由页面 */
    const goPlayList = (id) => {
        console.log(id);
        navigate(`/playlist/${id}`);
        // console.log(navigate);
    }

    /** 定义所需的存储数据变量 */
    let [recResult, setRecResult] = useState([]);

    useEffect(() => {
        (async () => {
            let { result } = await api.queryRecommentList();
            console.log(result);
            setRecResult(result);
        })()
    }, [])

    return <div className="home-box container">
        <h1>新歌速递</h1>
        <ul className="new-song-category">
            {categoryList.map((item) => {
                let { title, id } = item
                return <li key={id} onClick={goPlayList.bind(null, id)}>
                    <i>{title}</i>
                </li>
            })}

        </ul>
        <h1>为你推荐</h1>
        <Row>
            {recResult.length > 0 && recResult.map((item, index) => {
                let { picUrl, name } = item;
                const key = `col-${index}`;
                return (
                    <Col
                        key={key}
                        xs={{
                            flex: '100%',
                        }}
                        sm={{
                            flex: '10%',
                        }}
                        md={{
                            flex: '20%',
                        }}
                        lg={{
                            flex: '20%',
                        }}
                        xl={{
                            flex: '20%',
                        }}
                    >
                        <PlayListCard imgUrl={picUrl} title={name} />
                    </Col>
                );
            })}
        </Row>
    </div>
}

export default Home;