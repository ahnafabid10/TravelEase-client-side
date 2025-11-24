import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../RootLayout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllVehicles from "../Pages/AllVehicles";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddVehicle from "../Pages/AddVehicle";
import MyVehicle from "../Pages/MyVehicle";
import MyBookings from "../Pages/MyBookings";

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
            path:'/addVehicle',
            element:<AddVehicle></AddVehicle>
        },
        {
            path:'/myVehicles',
            element:<MyVehicle></MyVehicle>
        },
        {
            path:'/myBookings',
            element:<MyBookings></MyBookings>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }
        
    ]

  },
]);

export default router;