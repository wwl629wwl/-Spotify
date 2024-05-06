import React, { useState } from "react";
import './CategoryBar.less';
import { Button } from "@mui/material";
import PropTypes from 'prop-types';

const btnArray = [{ title: '歌曲', type: 1 },
{ title: '艺人', type: 100 },
{ title: '歌单', type: 1000 },
{ title: '专辑', type: 10 },
{ title: '用户', type: 1002 }];

const CategoryBar = function CategoryBar(props) {

    const { changeType } = props;

    let [active, setActive] = useState(1);

    const itemClick = (type, event) => {
        changeType(type);
        setActive(type);
    }

    return <div className="category-bar">
        {btnArray.map((item) => {
            let { title, type } = item;
            return <Button variant="contained"
                className={type === active ? 'active' : ''} key={type}
                onClick={itemClick.bind(null, type)}>
                {title}
            </Button>
        })}
    </div >

}
CategoryBar.defalutProps = {
    changeType: null
}

CategoryBar.propTypes = {
    changeType: PropTypes.func
}

export default CategoryBar;