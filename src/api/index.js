import http from "./http";

const queryUserInfo = () => http.get('/user/account');

const api = {
    queryUserInfo,
}

export default api;