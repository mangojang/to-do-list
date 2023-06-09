import axios from "axios";
import { useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import TodoProvider from "./context/TodoProvider";
import UserProvider from "./context/UserProvider";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import { useSetRecoilState} from 'recoil';
import { isLoggedInState } from "./atoms/userAtoms";

const errorPage = ()=>{
  return(
    <h1>404 error</h1>
  ) 
}


function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  
  useEffect(()=>{
      const token = localStorage.getItem('todo');
      if(token){
          setIsLoggedIn(true);
      }
  },[])
  
  const token = localStorage.getItem('todo');
    if(token){
        axios.interceptors.request.use(function (config) {
            config.headers.Authorization = `Bearer ${token}`
            return config
        }, function (error) {
            return Promise.reject(error)
        })
    }
  return (
    <UserProvider>
      <TodoProvider>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/*"  Component={errorPage} />
      </Routes>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
