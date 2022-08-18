
export type userType = {
  email: String | number;
  password: String;
  confirmPassword: String;
  firstName: String;
  lastName: String;
  checkPolicy:boolean
} | null;

export type authContextType = {
  userDetail: {
    token: string;
    user: userType;
  };
};
