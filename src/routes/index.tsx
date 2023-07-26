import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes