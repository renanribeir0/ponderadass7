import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import App from "./App"
import CadastraIniciativa from './pages/OI/cadastraIniciativa/index.jsx'
import React from 'react'
import { createRoot } from "react-dom/client"
import styles from './global.module.scss'

const router = createBrowserRouter([

    { path:"/", element: (<App />),},
    { path:"iniciativas", element: (<CadastraIniciativa/>)},

]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)