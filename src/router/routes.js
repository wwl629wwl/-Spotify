import { lazy } from "react";
import { Navigate } from "react-router";
import Home from "../views/Home";

const routes = [{
    path: '/',
    component: () => <Navigate to='/home' />
}, {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
        title: 'Spotify'
    }
}, {
    path: '/store',
    name: 'store',
    component: lazy(() => import('../views/Store.jsx')),
    meta: {
        title: 'Store'
    }
}, {
    path: '/search',
    name: 'search',
    component: lazy(() => import('../views/Search.jsx')),
    meta: {
        title: 'Search'
    }
}, {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../views/Login.jsx')),
    meta: {
        title: 'Login'
    }
}, {
    path: '/playlist/:id',
    name: 'playlist',
    component: lazy(() => import('../views/PlayList.jsx')),
    meta: {
        title: '列表详情'
    }
}, {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('../views/Personal.jsx')),
    meta: {
        title: '个人中心'
    }
}, {
    path: '/listdetail/:id',
    name: 'listdetail',
    component: lazy(() => import('../views/ListDetail.jsx')),
    meta: {
        title: '歌单详情'
    }
}, {
    path: '*',
    name: '404',
    component: lazy(() => import('../views/404.jsx')),
    meth: {
        title: 'NotFound'
    }
}]

export default routes;