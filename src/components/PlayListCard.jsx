import React from "react";
import './PlayListCard.less';
import PropTypes from 'prop-types';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";

const PlayListCard = function PlayListCart(props) {

    let { imgUrl, title } = props;

    return <div className="play-list-card text-center ">
        <img src={imgUrl} alt="" />
        <p>{title}</p>
        <div className="play-btn">
            <Button>
                <PlayArrowIcon color="black" />
            </Button>
        </div>
    </div>
}

PlayListCard.defaultProps = {
    imgUrl: "",
    title: ""
};

PlayListCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string
}

export default PlayListCard;