import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

const errorPage = ()=>{
  return(
    <h1>404 error</h1>
  ) 
}


function App() {
  const user = useContext(UserContext);

  useEffect(()=>{
    const token = localStorage.getItem('todo');
    if(token){
        user.setLoggedIn(true)      
    }
  },[user])

  return (
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/*"  Component={errorPage} />
      </Routes>
  );
}

export default observer(App);
