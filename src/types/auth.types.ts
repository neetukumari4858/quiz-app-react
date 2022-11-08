export type loggedInType = {
  isLogedIn: boolean
  setLogedIn: React.Dispatch<React.SetStateAction<boolean>>
} | {
  userDetail: {
    token: string;
    user: {};
  }
  setUserdetail: React.Dispatch<React.SetStateAction<{
    token: string;
    user: {};
  }>>
}

// export type userDetailType={
//   token: string;
//   user: {};
// }


// export type setUserdetailType= {
//   userDetail: userDetailType
// }

// export type isLogedInType={
//   isLogedIn: boolean;
//   setLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }