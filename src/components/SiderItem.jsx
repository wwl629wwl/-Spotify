import { Image } from "antd";
import React from "react";
import './SiderItem.less';
import PropTypes from 'prop-types';

const SiderItem = function SiderItem(props) {
    let { coverUrl, name, id } = props;
    return <div className="sider-item">
        <Image src={coverUrl} preview={false} />
        <div className="album-name">
            <span className="name">
                {name}
            </span>
            <span>
                歌单 Spotify
            </span>
        </div>
    </div>
}

SiderItem.defaultProps = {
    coverUrl: "",
    name: "",
    id: 0
}

SiderItem.propTypes = {
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number
}

export default SiderItem;