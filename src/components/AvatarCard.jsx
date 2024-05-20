import React from "react";
import './AvatarCard.less';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";
import PropTypes from 'prop-types';

const AvatarCard = function AvatarCard(props) {
    let { imgUrl, title, id } = props;
    return <div className="avatar-box " onClick={() => {

    }}>
        <img src={`${imgUrl}?param180y180`} alt="" />
        <p>{title}</p>
        <p>艺人</p>
        <div className="play-btn">
            <Button>
                <PlayArrowIcon color="black" />
            </Button>
        </div>
    </div>
}

AvatarCard.defaultProps = {
    imgUrl: "",
    title: "",
    id: 0,
};

AvatarCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
}

export default AvatarCard;