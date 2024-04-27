import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes/Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProviders from './providers/AuthProviders';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProviders>
    </HelmetProvider>
    

    
  </React.StrictMode>,
)