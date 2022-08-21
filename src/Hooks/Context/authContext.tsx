import { useContext, createContext, useState, useEffect } from "react";
import {reactChildren} from "./../../types/common.types"
// type isLoggedInType={
  
//   setLogedIn:React.Dispatch<React.SetStateAction<boolean>>
// }


















const AuthContext = createContext({ isLogedIn: false });
const AuthProvider = ({ children }:reactChildren) => {
  const userLoggedIn = localStorage.getItem("user") ? true : false;
  const [isLogedIn, setLogedIn] = useState(userLoggedIn);
  const [userDetail, setUserdetail] = useState({ token: "", user: {} });
  const token = localStorage.getItem("token");
  const localStorageUser = localStorage.getItem("user");
  const user=localStorageUser? JSON.parse(localStorageUser):null


  useEffect(() => {
    if (token && user) {
      setUserdetail({ token, user });
    }
  }, [token, user]);
  return (
    <AuthContext.Provider
      value={{ isLogedIn, setLogedIn, userDetail, setUserdetail }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };










