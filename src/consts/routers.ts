// MAIN

const MAIN_PATH = '/'
const PRODUCT_DETAIL_PATH = '/detail'
// AUTHENTICATION

const LOGIN_PATH = '/login'
const REGISTER_PATH = '/register'

// DASHBOARD
const DASHBOARD_INDEX_PATH = '/dashboard'
const DASHBOARD_LOGIN_PATH = '/dashboard/login'
const DASHBOARD_REGISTER_PATH = '/dashboard/register'
const DASHBOARD_PRODUCTS_PATH = '/dashboard/products'
const DASHBOARD_PRODUCTS_ADD_PATH = '/dashboard/products/add'

export const ROUTES = {
    INDEX: { PATH: MAIN_PATH },
    MAIN: {
        PRODUCT_DETAIL: PRODUCT_DETAIL_PATH
    },
    AUTHENTICATION: {
        LOGIN: { PATH: LOGIN_PATH },
        REGISTER: { PATH: REGISTER_PATH },
    },
    DASHBOARD: {
        INDEX: {PATH: DASHBOARD_INDEX_PATH},
        AUTHENTICATION: {
            LOGIN: { PATH: DASHBOARD_LOGIN_PATH },
            REGISTER: { PATH: DASHBOARD_REGISTER_PATH }
        },
        PRODUCTS: { 
            PATH: DASHBOARD_PRODUCTS_PATH,
            ADD: { PATH: DASHBOARD_PRODUCTS_ADD_PATH}
        }
    }
    
}