import React from "react";
import './AvatarCard.less';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";

const AvatarCard = function AvatarCard() {
    return <div className="avatar-box " onClick={() => {
        
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

export default AvatarCard;