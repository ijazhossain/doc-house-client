import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-[2526px] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
