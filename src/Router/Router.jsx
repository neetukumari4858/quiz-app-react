import { Routes,Route } from "react-router-dom"
import { SignUp } from "../Pages/Auth/SignUp.jsx"
import { Rules } from "../Pages/Rules/Rules.jsx"
import { Login } from "./../Pages/Auth/Login"
import {Home } from "./../Pages/HomePage/Home"
import { RequireAuth } from "../Utils/RequireAuth.js"

const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LoginPage" element={<Login />}/>
            <Route path="/SignUpPage" element={<SignUp/>}/>
            <Route path="/RulesPage" element={<RequireAuth> <Rules/></RequireAuth> }/>
        </Routes>
    )
}
export {AppRouter}