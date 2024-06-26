import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Protected from './components/Protected';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import App from "./App";
import ResetPassword from "./pages/ResetPassword";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="reset-password" element={<ResetPassword/>}/>
            <Route path="/" element={<Protected/>}>
                <Route path="/" index element={<Home/>}/>
            </Route>

        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
