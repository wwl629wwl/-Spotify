import * as TYPES from '../action-types';
import _ from '../../assets/utils';

let initial = {
    loginState: false,
    profile: {}
}

export default function baseReducer(state = initial, action) {

    state = _.clone(state);

    switch (action.type) {
        case TYPES.IS_LOGIN:
            state.loginState = action.payload;
            break;
        case TYPES.USER_PROFILE:
            state.profile = action.profile;
            break;
    }

    return state;
}