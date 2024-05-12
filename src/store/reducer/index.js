import { combineReducers } from "redux";
import searchReducer from "./search";
import toLoginReducer from "./tologin";
import baseReducer from "./base";

/* 合并reducer */
const reducer = combineReducers({
    base: baseReducer,
    search: searchReducer,
    toLogin: toLoginReducer
})

export default reducer;