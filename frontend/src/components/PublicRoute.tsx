import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { LoadingCir } from "./Loading";
import { PATHS } from "../routes/paths";

const PublicRoute = () => {
    const { user, loading } = useAuth();
    if (loading)
        return LoadingCir();
    if (user?.id)
        return <Navigate to={PATHS.HOME} replace/>;
    return <Outlet/>
}

export default PublicRoute;