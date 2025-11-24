import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../RootLayout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllVehicles from "../Pages/AllVehicles";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    element:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path: '/',
            Component: Home
        },
        {
            path:'/allVehicles',
            element:<AllVehicles></AllVehicles>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }
        
    ]

  },
]);

export default router;