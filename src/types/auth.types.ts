
// export type userType = {
//   email: String | number;
//   password: String;
//   confirmPassword: String;
//   firstName: String;
//   lastName: String;
//   checkPolicy: boolean;
// } | null;

// export type authContextType = {
//   user:userType
//   setUser:(arg0: userType) => void;
//   isLogedIn:boolean
//   setLogedIn:React.Dispatch<React.SetStateAction<boolean>>

// };
export type userDetailType={
  token: string;
  user: {};
}

export type setUserdetailType= {
  userDetail: userDetailType
}

export type isLogedInType={
  isLogedIn:boolean
  setLogedIn:React.Dispatch<React.SetStateAction<boolean>>
}