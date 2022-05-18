import { Routes,Route } from "react-router-dom"
import { SignUp,Rules ,Login,Home} from "./../Pages/index"
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