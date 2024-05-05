import * as TYPES from '../action-types';
import _ from '../../assets/utils';

/* 定义一个初始状态存储 */
let initial = {
    words: ""
}

export default function searchReducer(state = initial, action) {
    // 先将状态进行保存
    state = _.clone(state);

    switch (action.type) {
        case TYPES.SET_SEARCH_WORDS:
            state.words = action.words;
            break;

        default:
            break;
    }

    return state;
}
