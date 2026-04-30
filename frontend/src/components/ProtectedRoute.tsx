import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { LoadingCir } from "./Loading";
import { PATHS } from "../routes/paths";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading)
        return LoadingCir();
    if (!user)
        return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace/>;
    return <Outlet/>
}

export default ProtectedRoute;