
import { Routes,Route } from "react-router-dom"
import { RequireAuth } from "../Utils/RequireAuth.js"
import {SignUp,Rules,Login,Home,Questions ,Result} from "../Pages/index"
const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/LoginPage" element={<Login />}/>
            <Route path="/SignUpPage" element={<SignUp/>}/>
            <Route path="/RulesPage" element={<RequireAuth> <Rules/></RequireAuth> }/>
            <Route path="/quiz/:quizId" element={<RequireAuth> <Questions/></RequireAuth> }/>
            <Route path="/ResultPage" element={<RequireAuth> <Result/></RequireAuth> }/>
        </Routes>
    )
}
export {AppRouter}
