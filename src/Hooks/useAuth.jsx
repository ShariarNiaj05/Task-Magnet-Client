import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useAuth = () => {
    
    const authentication = useContext(AuthContext)
    return authentication
};

export default useAuth;