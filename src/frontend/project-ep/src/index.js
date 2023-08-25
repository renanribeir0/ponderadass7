import React from 'react';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import App from "./App";
import CadastraIniciativa from './pages/OI/cadastraIniciativa/index.jsx';
import { createRoot } from "react-dom/client";
import { Cadastro } from './pages/OI/cadastroOI';
// import styles from './global.module.scss';
import Login from './pages/OI/login/loginForm/index.jsx';
import ConfirmEmail from './pages/OI/login/confirmarEmail/index.jsx';
import NovaSenha from './pages/OI/login/novasenha/index.jsx';
import HomeOI from './pages/OI/visualizacaoProj/index.jsx';
import styles from './global.module.scss'
import DashIniciativa from './pages/EP/dashIniciativa'


const router = createBrowserRouter([

    { path:"/", element: (<App />),},
    { path: "login", element:(<Login/>)},
    { path: "confirm", element:(<ConfirmEmail/>)},
    { path: 'novasenha', element: (<NovaSenha/>)},
    { path: "Home", element:(<HomeOI/>)},
    { path:"iniciativas", element: (<CadastraIniciativa/>)},
    { path:"cadastro", element: (<Cadastro/>)},
    { path:"dashIniciativas", element: (<DashIniciativa/>)}


]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)