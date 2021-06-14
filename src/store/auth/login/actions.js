import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR , MAKE_USER_LOGGED_IN } from './actionTypes';

export const loginUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const logoutUser = (history) => {
    return {
        type: LOGOUT_USER,
        payload: { history }
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
        payload: {}
    }
}

export const apiError = (error) => {
    return {
        type: API_ERROR,
        payload: error
    }
}

export const MakeUserLoggedIn = () => {
    return {
        type: MAKE_USER_LOGGED_IN
        
    }
}


