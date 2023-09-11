import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/404';
import AllInterests from './pages/AllInterests';
import SelectedInterests from './pages/SelectedInterests';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <AllInterests />
      },

      {
        path:"Seleceted-Interests",
        element: <SelectedInterests />
      },
  
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 
);


