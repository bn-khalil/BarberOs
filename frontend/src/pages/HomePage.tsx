import { LoadingCir } from "../components/Loading";
import { useAuth } from "../context/AuthContext";
import { LandingPage } from "./LandingPage";
import UserDashboard from "./UserDashboard";


const HomePage = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return <LoadingCir />; 

  return isAuthenticated ? <UserDashboard /> : <LandingPage />;
};

export default HomePage;