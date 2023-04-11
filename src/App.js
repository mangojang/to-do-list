import { Route, Routes, Outlet } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const errorPage = ()=>{
  return(
    <div>404 error</div>
  ) 
}

function App() {
  
  return (
    <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/*"  Component={errorPage} />
    </Routes>
  );
}

export default App;
