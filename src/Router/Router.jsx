import { Routes,Route } from "react-router-dom"
import { SignUp } from "../Pages/Auth/SignUp.jsx"
import { Login } from "./../Pages/Auth/Login"
import {Home } from "./../Pages/HomePage/Home"

const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LoginPage" element={<Login />}/>
            <Route path="/SignUpPage" element={<SignUp/>}/>
        </Routes>
    )
}
export {AppRouter}