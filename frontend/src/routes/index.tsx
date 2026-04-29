import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<LoginPage/>}/>
            <Route path={PATHS.REGISTER} element={<RegisterPage/>}/>
            <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
    );
}