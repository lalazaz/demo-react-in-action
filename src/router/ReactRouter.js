// App.js
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Page from '../components/Page'
import APP from "../APP";

const ReactRouterApp = [
    {
        path: "/",
        element: <APP></APP>
    },
    {
        path: "page",
        element: <Page></Page>
    }
]

export const router = createBrowserRouter(ReactRouterApp)
