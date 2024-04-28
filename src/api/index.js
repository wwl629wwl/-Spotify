import http from "./http";

/**获取用户信息 */
const queryUserInfo = () => http.get('/user/account');

const queryNewSongExpress = (type) => {
    return http.get('/top/song', {
        params: {
            type
        }
    })
}

const api = {
    queryUserInfo,
    queryNewSongExpress
}

export default api;