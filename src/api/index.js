import http from "./http";
import _ from '../assets/utils';

const token = _.storage.get('tk') ?? null;
const cookie = _.storage.get('cookie') ?? null;


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
/**
 * 登录方法
 * @param {*} phone 手机号
 * @param {*} password 密码
 */
const login = (phone, password) => {
    return http.get('/login/cellphone', {
        params: {
            phone,
            password
        }
    })
}

/**
 * 获取每日推荐的歌单需要登录
 * @returns 
 */
const queryDailySongList = () => http.get(`/recommend/resource?${cookie}`);

/**
 * 更新用户信息
 * @param {*} nickname 用户名
 */
const updateUserInfo = (nickname) => {
    return http.get('/user/update', {
        params: {
            nickname
        }
    })
}

/**
 * 获取用户的播放记录
 * @param {*} uid 用户id
 * @returns 
 */
const queryUserRecord = (uid) => {
    return http.get('/user/record', {
        params: {
            uid,
        }
    })
};

/**
 * 获取用户收藏的歌单
 * @param {*} uid 
 * @returns 
 */
const queryUserPlayList = (uid) => {
    return http.get('/user/playlist', {
        params: {
            uid
        }
    })
}

const queryListDetail = (id) => {
    return http.get('/playlist/detail', {
        params: {
            id
        }
    })
}

const api = {
    queryUserInfo,
    queryNewSongExpress,
    queryRecommentList,
    querySearchResult,
    login,
    queryDailySongList,
    updateUserInfo,
    queryUserRecord,
    queryUserPlayList,
    queryListDetail
}

export default api;