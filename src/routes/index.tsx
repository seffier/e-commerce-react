import React, {JSX} from "react";
import {ROUTES} from "../consts/routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LinearProgress } from '@mui/material'

const AuthenticationLayout = React.lazy(async () => await import('../components/Custom/Layouts/Authentication/Layout'))
const Login = React.lazy(async () => await import('../pages/Authentication/Login'))
const MainLayout = React.lazy(async () => await import('../components/Custom/Layouts/Main/Layout'))
const Products = React.lazy(async () => await import('../pages/Main/Products'))

const getPath = (path: string): string => path

const routeAuth = [
    {
        path: getPath(ROUTES.AUTHENTICATION.LOGIN.PATH),
        Component: <Login />
    }
]

const routeNoAuth = [
    {
        path: getPath(ROUTES.INDEX.PATH),
        Component: <Products />
    }
]

const AppRoutes: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
            <React.Suspense fallback={<LinearProgress />}>
                <Routes>
                    {
                        routeAuth.map((route, key) => <Route key={key} path={route.path}
                                                             element={<AuthenticationLayout>
                                                                 {route.Component}
                                                             </AuthenticationLayout>} />)
                    }
                    {
                        routeNoAuth.map((route, key) => <Route key={key} path={route.path}
                                                               element={<MainLayout>
                                                                   {route.Component}
                                                               </MainLayout>} />)
                    }

                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes