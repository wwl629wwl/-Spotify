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

/**
 * 获取歌单的信息
 * @param {*} id 歌单id
 * @returns 
 */
const queryListDetail = (id) => {
    return http.get('/playlist/detail', {
        params: {
            id
        }
    })
}

/**
 * 获取歌单中的所有歌曲
 * @param {*} id 歌单id
 * @param {*} offset 偏移值
 * @returns 
 */
const queryAllSongs = (id, offset) => {
    const limit = 20;
    return http.get('/playlist/track/all', {
        params: {
            id,
            limit,
            offset
        }
    })
}

/**
 * 获取歌手详情
 * @param {*} id 歌手id
 * @returns 
 */
const querySingerDetail = (id) => {
    return http.get('/artists', {
        params: {
            id
        }
    })
}

/**
 * 获取歌手专辑
 * @param {*} id 歌手id
 * @returns 
 */
const querySingerAlbum = (id) => {
    return http.get('/artist/album', {
        params: {
            id
        }
    })
}

/**
 * 获取歌手MV
 * @param {*} id 歌手id
 * @returns 
 */
const querySingerMV = (id) => {
    return http.get('/artist/mv', {
        params: {
            id
        }
    })
}

/**
 * 获取相似歌手
 * @param {*} id 
 * @returns 
 */
const querySimilarSinger = (id) => {
    return http.get('/simi/artist', {
        params: {
            id
        }
    })
}

/**
 * 获取歌曲的详情
 * @param {*} ids 
 * @returns 
 */
const querySongDetails = (ids) => {
    return http.get('/song/detail', {
        params: {
            ids
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
    queryListDetail,
    queryAllSongs,
    querySingerDetail,
    querySingerAlbum,
    querySingerMV,
    querySimilarSinger,
    querySongDetails
}

export default api;