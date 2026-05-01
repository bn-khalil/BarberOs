import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import { PageNotFound } from "../pages/NotFound";
import { LandingPage } from "../pages/LandingPage";

export default function AppRouter() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={PATHS.HOME} element={<LandingPage/>}/>

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