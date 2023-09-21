import { createBrowserRouter } from "react-router-dom";
import Main from "../companent/Main/Main";
import Home from "../companent/Home/Home";
import Dateils from "../companent/Dateils/Dateils";
import Prodacts from "../companent/Prodacts/Prodacts";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('https://course-api.com/react-store-products'),
                element: <Home/>
            },
            {
                path: '/home/:id',
                loader: (data)=>fetch(`https://course-api.com/react-store-products?id=${data.params.id}`),
                element: <Dateils/>
            },
            {
                path: '/products',
                element: <Prodacts/>
            },
        ]
    },
])