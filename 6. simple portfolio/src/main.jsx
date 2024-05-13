import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<Layout />}></Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)