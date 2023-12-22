import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // const navigate = useNavigate()
//   const location = useLocation();
  
  if (loading) {
    return <p>loading............</p>
  }
 
  if (user) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoute;