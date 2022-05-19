import { Routes,Route } from "react-router-dom"
import { RequireAuth } from "../Utils/RequireAuth.js"
import {SignUp,Rules,Login,Home,Questions} from "./../Pages/index"

const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LoginPage" element={<Login />}/>
            <Route path="/SignUpPage" element={<SignUp/>}/>
            <Route path="/RulesPage" element={<RequireAuth> <Rules/></RequireAuth> }/>
            <Route path="/quiz/:quizId" element={<RequireAuth> <Questions/></RequireAuth> }/>
        </Routes>
    )
}
export {AppRouter}