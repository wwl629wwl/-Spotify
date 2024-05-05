import { combineReducers } from "redux";
import searchReducer from "./search";

/* 合并reducer */
const reducer = combineReducers({
    search: searchReducer
})

export default reducer;