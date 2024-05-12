import searchAction from "./search";
import toLoginAction from "./tologin";

/* 合并所有的action */
const action = {
    search: searchAction,
    toLogin: toLoginAction
}

export default action;