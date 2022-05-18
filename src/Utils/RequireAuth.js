import { Navigate ,useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/Context/authContext";

const RequireAuth=({children})=>{
    const {isLogedIn}=useAuth();
    console.log(isLogedIn,'isloged in')
    const location =useLocation();
    return isLogedIn ?
        children
    :
    <Navigate to="/LoginPage" state= {{from:location}} replace/>
}
export {RequireAuth}