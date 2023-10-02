import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";

import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import DoctorDetails from "../pages/Home/Doctors/DoctorDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes"
import DashboardLayout from "../Layouts/DashboardLayout";
import MyAppointment from "../pages/Dashboard/MyAppointment";
import AllUsers from "../pages/Dashboard/AllUsers";
import AdminRoutes from "./AdminRoute";
import AddDoctor from "../pages/Dashboard/AddDoctor";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: '/doctors/:id',
                element: <DoctorDetails></DoctorDetails>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: '/register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'myAppointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'addDoctor',
                element: <AddDoctor></AddDoctor>
            }
        ]
    }
])