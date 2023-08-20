import { useContext, useEffect, useState } from "react";
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
  const [localStorageID, setLocalStorageID] = useState<string | null>("");

  useEffect(() => {
    (async function() {
      setLocalStorageID(localStorage.getItem("user"))
    })()
  }, [])

  return (
    <BrowserRouter>
          {
            isLogged || localStorageID && <Header/> 
          }
          <Routes>
              <Route path="/signIn" element={!localStorageID ? <SignIn/> : <Navigate to={"/jobs"}/>}/>
              <Route path="/signUp" element={!localStorageID ? <SignUp/> : <Navigate to={"/jobs"}/>} />

              <Route path="/jobs" element={isLogged || localStorageID ? <Jobs/> : <Navigate to={"/signIn"}/>}/>
              <Route path="/job/:id" element={isLogged || localStorageID ? <Job/> : <Navigate to={"/signIn"}/>}/>
              <Route path="/profile" element={isLogged || localStorageID ? <Profile/> : <Navigate to={"/signIn"}/>} />

              <Route path="/publish-jobs" element={isLogged || localStorageID ? <PublishJob/> : <Navigate to={"/signIn"}/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default routes;