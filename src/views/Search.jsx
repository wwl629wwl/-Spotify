import React from "react";
import './less/Search.less';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Search = function Search() {
    return <div className="search-box">
        <div className="song-table body">
            <div className="tag">
                <span>#</span>
                <span className="name">标题</span>
                <span className="album">专辑</span>
                <AccessTimeIcon fontSize="small" />
            </div>

        </div>
    </div>
}

export default Search;