import React from 'react';
import './App.css';
import AuthProvider from "./context/AuthProvider";
import LoginPage from "./pages/LoginPage";
import {Route, Routes} from "react-router-dom";
import RequireAuth from "./context/RequireAuth";
import TestPageAfterLogin from "./pages/TestPageAfterLogin";

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="*" element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/TestPage" element={<RequireAuth>
                    <TestPageAfterLogin/>
                </RequireAuth>}
                />
            </Routes>
        </AuthProvider>
    );
}