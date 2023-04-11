import { Route, Routes, Outlet } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
