import * as TYPES from '../action-types';

/* toLogin */
const toLoginAction = {

    navigateToLogin(toLogin) {
        return {
            type: TYPES.NAVIGATE_TO_LOGIN,
            toLogin
        }
    }
}

export default toLoginAction;