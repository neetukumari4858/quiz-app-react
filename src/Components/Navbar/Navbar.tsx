import React from "react";
import { auth, signOut } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Context/authContext";
import { toast } from "react-toastify";

import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const {
    userDetail: { token, user },
    setUserdetail,
    setLogedIn,
  } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    signOut(auth);
    setUserdetail({ token: "", user: {} });
    setLogedIn(false);
    toast.success("Logout Successfull !");
    navigate("/");
  };
  return (
    <nav className="navigation">
      <label className="quiz-label">Quiz App</label>
      <ul className="quizNav-ul">
        <Link className="anchor-link" to="/">
          Home
        </Link>

        {token && user ? (
          <button className="logout bg-red" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="login-btn navLoginbtn bg-red">
            <Link className="navlink" to="LoginPage">
              Login
            </Link>
          </button>
        )}
      </ul>
    </nav>
  );
};
export { Navbar };

