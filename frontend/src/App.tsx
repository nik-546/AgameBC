import React from 'react';
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RequireAuth from "./context/RequireAuth";
import TestPageAfterLogin from "./pages/TestPageAfterLogin";
import AgameBC from "./pages/AgameBC";
import LevelProvider from "./context/LevelProvider";

export default function App() {
    return (
        <AuthProvider>
            <LevelProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path="*" element={<Login/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/AgameBC" element={
                            <RequireAuth>
                                <AgameBC/>
                            </RequireAuth>}/>
                        <Route path="/TestPage" element={
                            <RequireAuth>
                                <TestPageAfterLogin/>
                            </RequireAuth>}/>

                    </Routes>
                </BrowserRouter>
            </LevelProvider>
        </AuthProvider>
    );
}