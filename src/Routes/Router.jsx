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
            path:'/vehicleDetails/:id',
            element:<PrivateRoute>
              <VehiclesDetails></VehiclesDetails>
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://travelease-server-side-five.vercel.app/allVehicles/${params.id}`)
        },
        {
            path:'/myVehicles',
            element:<PrivateRoute><MyVehicle></MyVehicle></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:3000/allVehicles/${params.id}`)
        },
        {
            path:'/updataVehicle/:id',
            element:<PrivateRoute><UpdateVehicle></UpdateVehicle></PrivateRoute>,
            loader: ({params}) => fetch(`https://travelease-server-side-five.vercel.app/allVehicles/${params.id}`)
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
]);

export default router;