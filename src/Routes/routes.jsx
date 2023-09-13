import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Appointment from "../pages/Home/Appointment/Appointment";

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
            }
        ]
    }
])