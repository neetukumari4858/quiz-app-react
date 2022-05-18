import { SignUp,Rules ,Login,Home} from "./../Pages/index"
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