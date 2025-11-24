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
import PrivateRoute from "./PrivateRoute";

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
            element:<PrivateRoute>
              <AddVehicle></AddVehicle>
            </PrivateRoute>
        },
        {
            path:'/myVehicles',
            element:<PrivateRoute><MyVehicle></MyVehicle></PrivateRoute>
        },
        {
            path:'/myBookings',
            element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }
        
    ]

  },
]);

export default router;