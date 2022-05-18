import { SignUp,Rules ,Login,Home} from "./../Pages/index"
import { RequireAuth } from "../Utils/RequireAuth.js"
import {Routes,Route} from "react-router-dom"
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
