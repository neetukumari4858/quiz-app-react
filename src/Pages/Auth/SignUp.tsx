import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./SignUp.css";
import { auth } from "../../firebase";
import { useAuth } from "../../Hooks/Context/authContext";
import { toast } from "react-toastify";
import {AiFillEye , AiFillEyeInvisible} from "react-icons/ai";
import {userType } from "./../../types/auth.types";

const SignUp = () => {
  const { setLogedIn, setUserdetail } = useAuth();
  const location = useLocation();
  const [newUser, setNewUser] = useState<userType>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    checkPolicy: false,
  });
  const navigate = useNavigate();
  const [inputType, setinputType] = useState("password");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
  const {email,password, confirmPassword,firstName,lastName,checkPolicy}=newUser()
  const submisionHandler = () => {
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (!checkPolicy) {
      toast.warning("tick the check box and agree to the terms and conditions");
    }
    if (confirmPassword !== password) {
      toast.error("The passwords entered do not match");
    } else {
      setErrorMsg("");
      setsubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setsubmitButtonDisabled(false);
          localStorage.setItem("user", JSON.stringify(response.user.uid));
          const token = response.user.accessToken;
          localStorage.setItem("token", token);
          setUserdetail({
            token: response.user.accessToken,
            user: response.user.uid,
          });
          setLogedIn(true);
          navigate(location?.state?.from?.pathname ?? "/", { replace: true });
          toast.success(
            "Congratulation, your account has been successfully created."
          );
        })
        .catch((error) => {
          setsubmitButtonDisabled(false);
          const errorMsgs = error.message;
          toast.error(errorMsgs);
        });
    }
  };
  return (
    <div className="outer-Login-container">
      <div className="signup-container">
        <div className="login-content">
          <h2 className="signUp-heading">Sign Up</h2>
          <label className="signUp-lebel">First Name</label>
          <input
            type="text"
            className="sign-input"
            placeholder="Enter your Name"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, firstName: event.target.value }))
            }
          />

          <label className="signUp-lebel">Last Name</label>
          <input
            type="text"
            className="sign-input"
            placeholder="Enter your Last Name"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, lastName: event.target.value }))
            }
            required
          />

          <label className="signUp-lebel">Email address</label>
          <input
            type="text"
            className="sign-input"
            placeholder="annu@neog.com"
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />

          <label className="signUp-lebel">Password</label>
          <input
            type={inputType}
            className="sign-input"
            placeholder="..................."
            onChange={(event) =>
              setNewUser((prev) => ({ ...prev, password: event.target.value }))
            }
            required
          />
           <div
              className="sign_passwordIcon"
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

          <label className="signUp-lebel">Confirm Password</label>
          <input
            type="text"
            className="sign-input"
            placeholder="........."
            onChange={(event) =>
              setNewUser((prev) => ({
                ...prev,
                confirmPassword: event.target.value,
              }))
            }
            required
          />
          <br />
          <div className="termsandConditions-div">
            <input
              type="checkbox"
              id="termsAndCondition"
              checked={checkPolicy}
              onChange={() =>
                setNewUser({ ...newUser, checkPolicy: !checkPolicy })
              }
            />
            <label htmlFor="termsAndCondition" className="terms-and-condition">
              I accept all Terms & Conditions
            </label>
          </div>
          <b className="errorMsg"> {errorMsg}</b>
          <div>
            <button
              className="sign-btn bg-red"
              onClick={submisionHandler}
              disabled={submitButtonDisabled}
            >
              Sign up
            </button>
          </div>
          <h4 className="alreadyHaveAccount">
            Already have an account?
            <Link to="/LoginPage" className="login-here">
              Login Here
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
export { SignUp };
