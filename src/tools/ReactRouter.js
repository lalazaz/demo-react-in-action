// App.js
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import MoviePage from '../components/MoviePage'
import APP from "../APP";

const ReactRouterApp = [
    {
        path: "/",
        element: <APP></APP>
    },
    {
        path: "page",
        element: <MoviePage></MoviePage>
    }
]

export const router = createBrowserRouter(ReactRouterApp)
