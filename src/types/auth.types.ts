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

export type newUserType = {
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
  checkPolicy: boolean,
}