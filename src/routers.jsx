import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
    },
    {
        path:'/auth',
        element:<h1>auth page</h1>
    },
    {
        path:'/registration',
        element:<h1>registration page</h1>
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
