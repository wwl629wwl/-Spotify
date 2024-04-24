import http from './http';

/** 获取用户信息 --- 未登录 */
const queryUserInfo = () => http.get('127.0.0.1:3000/user/account');



/* 暴露 API */
const api = {
    queryUserInfo
}

export default api;