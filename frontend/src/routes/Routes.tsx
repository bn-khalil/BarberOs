import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import { PageNotFound } from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import AdminRoute from "../components/AdminRoute";
import AdminDashboard from "../pages/AdminDashboard";
import BookPage from "../pages/BookPage";

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
                    <Route path={PATHS.BOOK} element={<BookPage/>}/>
                </Route>

                <Route element={<AdminRoute/>}>
                    <Route path={PATHS.DASHBOARD} element={<AdminDashboard/>}/>
                </Route>
                

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </AuthProvider>
    );
}