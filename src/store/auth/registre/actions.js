import { REGISTER_USER, REGISTER_USER_SUCCESSFUL, REGISTER_USER_FAILED , MAKE_USER_LOGGED_IN } from './actionTypes';

export const registerUser = (payload) => {
    return {
        type: REGISTER_USER,
        payload
    }
}

export const registerUserSuccessful = (payload) => {
    return {
        type: REGISTER_USER_SUCCESSFUL,
        payload
    }
}

export const registerUserFailed = (payload) => {
    return {
        type: REGISTER_USER_FAILED,
        payload
    }
}



