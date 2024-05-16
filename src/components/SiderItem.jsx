import { Image } from "antd";
import React from "react";
import './SiderItem.less';

const SiderItem = function SiderItem() {
    return <div className="sider-item">
        <Image src="https://p1.music.126.net/OVJdhwL-0i9thlOsmNnosg==/109951169135010258.jpg" preview={false} />
        <div className="album-name">
            <span className="name">
                每周新发现
            </span>
            <span>
                歌单 Spotify
            </span>
        </div>
    </div>
}

export default SiderItem;