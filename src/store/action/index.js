import baseAction from "./base";
import searchAction from "./search";
import toLoginAction from "./tologin";

/* 合并所有的action */
const action = {
    base: baseAction,
    search: searchAction,
    toLogin: toLoginAction
}

export default action;