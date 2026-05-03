import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { LoadingCir } from "./Loading";
import { PATHS } from "../routes/paths";

const PublicRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    if (loading)
        return LoadingCir();
    if (isAuthenticated)
        return <Navigate to={PATHS.HOME} replace/>;
    return <Outlet/>
}

export default PublicRoute;