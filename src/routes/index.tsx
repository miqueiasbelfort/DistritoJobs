import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Jobs from "../pages/Jobs";
import Job from "../pages/Job";
import Profile from "../pages/Profile";
import PublishJob from "../pages/PublishJob";

//Componentes
import Header from "../components/Header";

function routes() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>} />

            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/job/:id" element={<Job/>}/>
            <Route path="/profile" element={<Profile/>} />

            <Route path="/publish-jobs" element={<PublishJob/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes;