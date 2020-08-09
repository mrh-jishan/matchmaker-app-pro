const GOOGLE_AUTH = {
    AUTH_INIT: 'G-AUTH-INIT',
    AUTH_SUCCESS: 'G-AUTH-SUCCESS',
    AUTH_ERROR: 'G-AUTH-ERROR',
    LOGOUT: 'G-LOGOUT'
}

const LOGIN = {
    INIT_AUTH: 'AUTH-INIT',
    AUTH_SUCCESS: 'AUTH-SUCCESS',
    AUTH_ERROR: 'AUTH-ERROR',
    LOGOUT: 'AUTH-LOGOUT'
}

const REGISTER = {
    INIT_REGISTER: 'INIT-REGISTER',
    REGISTER_SUCCESS: 'SUCCESS-REGISTER',
    REGISTER_ERROR: 'REGISTER-ERROR'
}

const AUTH_TYPE = {
    GOOGLE: 'GOOGLE-AUTH',
    BASIC: 'BASIC-AUTH'
}

const LOCATION = {
    INIT_LOCATION: 'INIT-LOCATION'
}


const MODAL = {
    SHOW_MODAL: 'SHOW-MODAL',
    HIDE_MODAL: 'HIDE-MODAL'
}
export { GOOGLE_AUTH, LOGIN, AUTH_TYPE, LOCATION, REGISTER, MODAL }
