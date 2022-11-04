import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuth } from "../../Hooks/Context/authContext";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import "./Login.css";
const Login = () => {
  const [inputType, setinputType] = useState("password");
  const [loginUserData, setloginUserData] = useState({
    email: "",
    password: "",
    checkPolicy: false,
  });
  const { setLogedIn, setUserdetail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const loginHandler = () => {
    if (!loginUserData.email || !loginUserData.password) {
      setErrorMsg("Fill all the fields");
      return;
    }
    if (!loginUserData.checkPolicy)
      toast.warning("tick the check box and agree to the terms and conditions");
    else {
      setErrorMsg("");
      signInWithEmailAndPassword(
        auth,
        loginUserData.email,
        loginUserData.password
      )
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.user.uid));
          const token = response.user.accessToken;
          localStorage.setItem("token", token);
          setUserdetail({
            token: response.user.accessToken,
            user: response.user.uid,
          });
          setLogedIn(true);
          navigate(location?.state?.from?.pathname ?? "/", { replace: true });
          toast.success("Login Successfull !");
        })
        .catch((error) => {
          const errorMsgs = error.message;
          toast.error(errorMsgs);
        });
    }
  };
  return (
    <div className="outer-container question-section">
      <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
            <h2 className="Login-heading-two">Login</h2>
            <label className="lebel-text">Email address</label>
            <input
              className="user-input"
              type="email"
              placeholder="  demo@gmail.com "
              value={loginUserData.email}
              onChange={(event) =>
                setloginUserData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              required
            />

            <label className="lebel-text">Password</label>
            <input
              type={inputType}
              className="user-input password"
              placeholder="  Enter Password..."
              value={loginUserData.password}
              onChange={(event) =>
                setloginUserData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
            />
            <div
              className="passwordIcon"
              onClick={() =>
                inputType === "text"
                  ? setinputType("password")
                  : setinputType("text")
              }
            >
              {inputType === "text" ? (
                <p>
                  <AiFillEye />
                </p>
              ) : (
                <p>
                  <AiFillEyeInvisible />
                </p>
              )}
            </div>
            <div className="footerDiv">
              <div className="forgotPasswodText">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginUserData.checkPolicy}
                  onChange={() =>
                    setloginUserData({
                      ...loginUserData,
                      checkPolicy: !loginUserData.checkPolicy,
                    })
                  }
                />
                <label htmlFor="rememberMe" className="remember-me">
                  Remember me
                </label>
              </div>
              <b className="errorMsg"> {errorMsg}</b>
              <div className="login-grid">
                <button
                  type="button"
                  className="videologin-btn bg-red"
                  onClick={loginHandler}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="videologin-btn  bg-white"
                  onClick={() => {
                    setloginUserData({
                      ...loginUserData,
                      email: "demo@gmail.com",
                      password: "demo123",
                      checkPolicy: true,
                    });
                  }}
                >
                  Guest Login
                </button>
              </div>

              <h4 className="create-account">
                <Link to="/SignUpPage" className="createAccount">
                  Create New Account
                </Link>
              </h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export { Login };
