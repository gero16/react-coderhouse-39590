import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './routes/Root'
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Item from './routes/Item';
import './Root.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> 
  },
  {
    path: "/category/:id",
    element:  <Root />,
  },
  {
    path: "/item/:id",
    element: <Item /> ,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

