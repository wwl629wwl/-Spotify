import * as TYPES from '../action-types';
import _ from '../../assets/utils';
import api from '../../api';

const baseAction = {

    // 获取本地cookie判断是否已经登录
    loginOrNot() {
        let cookie = _.storage.get('cookie');
        if (!cookie) {
            return {
                type: TYPES.IS_LOGIN,
                payload: false
            }
        } else {
            return {
                type: TYPES.IS_LOGIN,
                payload: true
            }
        }
    },

    async baseQueryUserInfo() {
        let { profile } = await api.queryUserInfo();
        return {
            type: TYPES.USER_PROFILE,
            profile
        }
    }
}
export default baseAction;