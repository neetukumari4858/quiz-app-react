import { Navigate ,useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/Context/authContext";
import {reactChildren} from "./../types/common.types";

const RequireAuth=({children}:reactChildren)=>{
    const {isLogedIn}=useAuth();
    const location =useLocation();
    return isLogedIn ?
        children
    :
    <Navigate to="/LoginPage" state= {{from:location}} replace/>
}
export {RequireAuth}