import React from "react";
import './less/Home.less';
import { useNavigate } from "react-router";


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
    </div>
}

export default Home;