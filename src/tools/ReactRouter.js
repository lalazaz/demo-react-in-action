// App.js
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import MovieList from '../components/MovieList'
import APP from "../APP";
import MovieDetail from "../components/MovieDetail";

const ReactRouterApp = [
    {
        path: "/",
        element: <APP></APP>
    },
    {
        path: "page",
        element: <MovieList></MovieList>
    },
    {
        path: "page/:movieId",
        element: <MovieDetail></MovieDetail>
    }
]

export const router = createBrowserRouter(ReactRouterApp)
