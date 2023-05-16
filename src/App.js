import axios from "axios";
import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { getUser } from "./actions/user";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

const errorPage = ()=>{
  return(
    <h1>404 error</h1>
  ) 
}


const App =()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem('todo');
    if(token){
      dispatch(getUser(token))
    }
    
  },[dispatch])

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

export default App;
