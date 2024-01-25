// MAIN

const MAIN_PATH = '/'
const PRODUCT_DETAIL_PATH = '/detail'
// AUTHENTICATION

const LOGIN_PATH = '/login'

export const ROUTES = {
    INDEX: { PATH: MAIN_PATH },
    MAIN: {
        PRODUCT_DETAIL: PRODUCT_DETAIL_PATH
    },
    AUTHENTICATION: {
        LOGIN: { PATH: LOGIN_PATH },
    }
}