import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

const errorPage = ()=>{
  return(
    <div>404 error</div>
  ) 
}


function App() {

  return (
    <UserProvider>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/*"  Component={errorPage} />
      </Routes>
    </UserProvider>
  );
}

export default App;
