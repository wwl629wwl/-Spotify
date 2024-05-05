import * as TYPES from '../action-types';

/* 搜索对应的相关函数 */
const searchAction = {
    // 设置搜索关键词
    setSearchWords(words) {
        return {
            type: TYPES.SET_SEARCH_WORDS,
            words
        }
    }
}

export default searchAction;