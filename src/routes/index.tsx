import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "../context/context";

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

  const {isLogged} = useContext(AppContext);

  console.log(`esta logado: ${isLogged}`)

  return (
    <BrowserRouter>
          {
            isLogged && <Header/> 
          }
          <Routes>
              <Route path="/signIn" element={<SignIn/>}/>
              <Route path="/signUp" element={<SignUp/>} />

              <Route path="/jobs" element={isLogged ? <Jobs/> : <Navigate to={"/signIn"}/>}/>
              <Route path="/job/:id" element={isLogged ? <Job/> : <Navigate to={"/signIn"}/>}/>
              <Route path="/profile" element={isLogged ? <Profile/> : <Navigate to={"/signIn"}/>} />

              <Route path="/publish-jobs" element={isLogged ? <PublishJob/> : <Navigate to={"/signIn"}/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default routes;