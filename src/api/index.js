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

const querySearchResult = (keywords, type = 1, current = 1, limit = 20) => {
    const offset = (current - 1) * limit;
    return http.get('/search', {
        params: {
            keywords,
            type,
            offset,
            limit
        }
    })
}
const api = {
    queryUserInfo,
    queryNewSongExpress,
    queryRecommentList,
    querySearchResult
}

export default api;