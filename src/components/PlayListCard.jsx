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

PlayListCard.defaultProps = {
    imgUrl: "",
    title: "",
    id: 0
};

PlayListCard.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number
}

export default PlayListCard;