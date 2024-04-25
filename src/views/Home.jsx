import React from "react";
import './less/Home.less';


const Home = function Home() {
    return <div className="home-box container">
        <h1>新歌速递</h1>
        <ul className="new-song-category">
            <li>
                <i>全部</i>
            </li>
            <li>
                <i>日本</i>
            </li>
            <li>
                <i>华语</i>
            </li>
            <li>
                <i>欧美</i>
            </li>
            <li>
                <i>韩国</i>
            </li>
        </ul>
    </div>
}

export default Home;