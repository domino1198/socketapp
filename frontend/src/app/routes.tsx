import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import Main from "../pages/Main";
import Authorization from "../pages/Authorization";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navigate to={'/main'}/>,
        },
        {
            path: "/main",
            element: <Main/>,
        },
        {
            path: "/auth",
            element: <Authorization/>,
        },
    ]
);




