import { Routes,Route } from "react-router-dom"
import { Login } from "./../Pages/Auth/Login"
import {Home } from "./../Pages/HomePage/Home"
const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LoginPage" element={<Login />}/>
        </Routes>
    )
}
export {AppRouter}