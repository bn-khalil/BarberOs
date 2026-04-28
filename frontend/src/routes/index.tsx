import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<LoginPage/>}/>
            <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
    );
}