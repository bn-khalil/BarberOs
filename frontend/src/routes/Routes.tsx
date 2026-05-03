import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { AuthProvider, useAuth } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import { PageNotFound } from "../pages/NotFound";
import { LandingPage } from "../pages/LandingPage";
import { Header } from "../sections/Header";
import UserDashboard from "../pages/UserDashboard";
import HomePage from "../pages/HomePage";

export default function AppRouter() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={PATHS.HOME} element={<HomePage/>}/>

                <Route element={<PublicRoute/>}>
                    <Route path={PATHS.LOGIN} element={<LoginPage/>}/>
                    <Route path={PATHS.REGISTER} element={<RegisterPage/>}/>
                </Route>

                <Route element={<ProtectedRoute/>}>
                </Route>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </AuthProvider>
    );
}