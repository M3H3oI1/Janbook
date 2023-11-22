import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,

        children: [
            {
                path: "/",
                element: <Login></Login>,
            },
            {
                path: "/click",
                element:<Home></Home> ,
            },
            {
                path: "/Profile",
                element:<Profile></Profile> ,
            },
            

        ]


    },
]);