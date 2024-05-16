import { Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import api from '../api/index.js';
import PlayListCard from "../components/PlayListCard.jsx";
import './less/Home.less';
import _ from '../assets/utils.js';
import action from "../store/action/index.js";
import { connect } from 'react-redux';

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

    /* 从props中结构出需要的函数 属性 包括：路由 Redux */
    const { navigate, loginOrNot, base: { loginState }, baseQueryUserInfo } = props;

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
            let cookie = _.storage.get('cookie');
            if (cookie) {
                let { recommend, code } = await api.queryDailySongList();
                if (+code !== 200) {
                    message.error('网络异常');
                    return;
                }
                setRecResult(recommend);
            } else {
                let { result } = await api.queryRecommentList();
                setRecResult(result);
            }
        })()
    }, [])

    /* 在进入home页面的时候 从localstorage中获取cookie判断是否登录 */
    useEffect(() => {
        loginOrNot();

    }, [])

    useEffect(() => {
        (async () => {
            if (loginState) {
                // 表明此时已经登录 那么去异步获取用户信息
                // await baseQueryUserInfo();
            }
        })()
    }, [loginState])


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
                let { picUrl, name, id } = item;
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
                        <PlayListCard imgUrl={picUrl} title={name} id={id} />
                    </Col>
                );
            })}
        </Row>
    </div>
}

export default connect(
    state => {
        return {
            base: state.base
        }
    },
    { ...action.base }
)(Home);