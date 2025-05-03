import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import CatagoreNews from "./pages/CatagoreNews";

const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:"",
                Component:Home,
            },
            {
                path:"/categore/:id",
                loader:()=>fetch('/public/demo-data/news.json'),
                Component:CatagoreNews,
            },
        ]
    },
    {
        path:'/news',
        element:<h1>news page</h1>
    },
    {
        path:'/*',
        element:<h1>error 404 page</h1>
    }
]);
export default router;
