import React, { useState } from "react";
import './CategoryBar.less';
import { Button } from "@mui/material";

const btnArray = ['歌曲', '艺人', '歌单', '专辑', '用户'];

const CategoryBar = function CategoryBar() {

    let [active, setActive] = useState(0);

    const itemClick = (index, event) => {
        setActive(index);
    }

    return <div className="category-bar">
        {btnArray.map((item, index) => {
            return <Button variant="contained"
                className={index === active ? 'active' : ''} key={index}
                onClick={itemClick.bind(null, index)}>
                {item}
            </Button>
        })}
    </div >

}

export default CategoryBar;