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
import VehiclesDetails from "../Pages/VehiclesDetails";
import UpdateVehicle from "../Pages/UpdateVehicle";
import MyVehiclePage from "../Pages/MyVehiclePage";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
            path:'/vehicleDetails/:id',
            element:<VehiclesDetails></VehiclesDetails>
            ,
            // loader: ({params}) => fetch(`https://travel-ease-server-side.vercel.app/allVehicles/${params.id}`)
            loader: ({params}) => fetch(`http://localhost:3000/allVehicles/${params.id}`)
        },
        {
            path:'/myVehicles',
            element:<PrivateRoute><MyVehicle></MyVehicle></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:3000/allVehicles/${params.id}`)
        },
        {
            path:'/updataVehicle/:id',
            element:<PrivateRoute><UpdateVehicle></UpdateVehicle></PrivateRoute>,
            // loader: ({params}) => fetch(`https://travel-ease-server-side.vercel.app/allVehicles/${params.id}`)
            loader: ({params}) => fetch(`http://localhost:3000/allVehicles/${params.id}`)
        },
        {
            path:'/myBookings',
            element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
            path:'/myVehiclePage',
            element:<PrivateRoute><MyVehiclePage></MyVehiclePage></PrivateRoute>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }
        
    ]

  },
  {
    path:'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
        {
            index:true,
            element: <Dashboard></Dashboard>
        },
        {
            path:'myVehicle',
            element:<MyVehiclePage></MyVehiclePage>
        },
        {
            path:'myBookings',
            element:<MyBookings></MyBookings>
        },
        {
            path:'addVehicle',
            element:<AddVehicle></AddVehicle>
        },
        {
            path:'profile',
            element:<Profile></Profile>
        },
    ]
  }
]);

export default router;