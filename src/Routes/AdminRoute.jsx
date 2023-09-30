import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../components/Shared/Spinner";


const AdminRoutes = ({ children }) => {
    const { user, loading, logOut } = useAuth();
    const location = useLocation();
    // console.log(location);
    const [admin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }
    if (user && admin) {
        return children;
    } else {
        localStorage.removeItem('accessToken')
        logOut()
        return <Navigate to="/login" state={{ from: location }} replace />
    }

};

export default AdminRoutes;