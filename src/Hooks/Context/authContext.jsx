import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth} from "firebase/auth";

const AuthContext=createContext(null);
const AuthProvider=({children})=>{
    const [userData,setUserData]=useState({})
    const navigate=useNavigate();
    const auth=getAuth();

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if (user){
            setUserData(user.displayName);
            navigate("/")
        }else setUserData("")
      })
    },[])
    return (
        <AuthContext.Provider value={{userData}}>{children}</AuthContext.Provider>
    )
}
const useAuth=()=>{
    const context=useContext(AuthContext);
    if (context===undefined){
        throw new Error ("Auth Must Be used inside Provider")        
    }
    return context;
}
export {AuthProvider,useAuth}
