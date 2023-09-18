import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";

import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import DoctorDetails from "../pages/Home/Doctors/DoctorDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login";

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
                element: <Appointment></Appointment>
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
            }
        ]
    }
])