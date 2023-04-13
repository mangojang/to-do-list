import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Todo from "./Todo";

const errorPage = ()=>{
  return(
    <div>404 error</div>
  ) 
}

function App() {

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
