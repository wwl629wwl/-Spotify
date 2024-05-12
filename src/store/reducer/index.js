import { combineReducers } from "redux";
import searchReducer from "./search";
import toLoginReducer from "./tologin";

/* 合并reducer */
const reducer = combineReducers({
    search: searchReducer,
    toLogin: toLoginReducer
})

export default reducer;