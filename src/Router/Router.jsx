import { SignUp,Rules ,Login,Home} from "./../Pages/index"
import {Routes,Route} from "react-router-dom"
import { RequireAuth } from "../Utils/RequireAuth"

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