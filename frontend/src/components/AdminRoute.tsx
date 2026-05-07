import { useAuth } from '../context/AuthContext'
import { LoadingCir } from './Loading';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../routes/paths';

function AdminRoute() {
    const {user, isAuthenticated, loading} = useAuth();
    if (loading)
        return LoadingCir();

    if (!isAuthenticated || user?.role !== "ADMIN")
        return <Navigate to={PATHS.HOME} replace/>;
    return <Outlet/>
}

export default AdminRoute