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

/** 获取推荐歌单 不需要登录 */
const queryRecommentList = () => http.get('/personalized');

/** 根据输入的内容搜索 */

const querySearchResult = (keywords) => {
    
}
const api = {
    queryUserInfo,
    queryNewSongExpress,
    queryRecommentList
}

export default api;