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