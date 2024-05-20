import React from "react";
import './PlayListCard.less';
import PropTypes from 'prop-types';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const PlayListCard = function PlayListCart(props) {

    let { imgUrl, title, id } = props;

    const navigate = useNavigate();

    return <div className="play-list-card text-center " onClick={() => {
        navigate(`/listdetail/${id}`, { state: { id: id }, replace: true })
    }}>
        <img src={imgUrl} alt="" />
        <p>{title}</p>
        <div className="play-btn">
            <Button>
                <PlayArrowIcon color="black" />
            </Button>
        </div>
    </div>
}

/**
 * 因为这个组件在很多地方都需要被用到 那么根据type值来判断 他需要跳转到什么地方
 * type = 0 就表示跳转到对应歌单
 * type = 1 就表示跳转到对应专辑
 * type = 2 就表示跳转到对应mv
 */
PlayListCard.defaultProps = {
    imgUrl: "",
    title: "",
    id: 0,
    type: 0,
};

PlayListCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    type: PropTypes.number
}

export default PlayListCard;