import { Navigate ,useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/Context/authContext";

const RequireAuth=({children}:any)=>{
    const {isLogedIn}=useAuth();
    const location =useLocation();
    return isLogedIn ?
        children
    :
    <Navigate to="/LoginPage" state= {{from:location}} replace/>
}
export {RequireAuth}