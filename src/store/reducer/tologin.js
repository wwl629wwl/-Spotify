import * as TYPES from '../action-types';
import _ from '../../assets/utils';

/* 定义一个初始状态存储 */
let initial = {
    toLogin: false
}

export default function toLoginReducer(state = initial, action) {
    // 先将状态进行保存
    state = _.clone(state);

    switch (action.type) {
        case TYPES.NAVIGATE_TO_LOGIN:
            state.toLogin = action.toLogin;
            break;

        default:
            break;
    }

    return state;
}
