import { useContext, createContext, useState, useEffect } from "react";
// import { reactChildren } from "./../../types/common.types"
// import { loggedInType } from "./../../types/auth.types"


export type userDetail = {
  token: string;
  user: {};
};

export type AuthContextType = {
  isLogedIn: boolean;
  setLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userDetail: userDetail;
  setUserdetail: React.Dispatch<
    React.SetStateAction<{
      token: string;
      user: {};
    }>
  >;
};

const AuthContext = createContext({
  isLogedIn: false,
  userDetail: { token: "", user: {} }
} as AuthContextType);
const AuthProvider = ({ children }: any) => {
  const userLoggedIn = localStorage.getItem("user") ? true : false;
  const [isLogedIn, setLogedIn] = useState(userLoggedIn);
  const [userDetail, setUserdetail] = useState({ token: "", user: {} });
  const token = localStorage.getItem("token");
  const localStorageUser = localStorage.getItem("user");
  const user = localStorageUser ? JSON.parse(localStorageUser) : null

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










