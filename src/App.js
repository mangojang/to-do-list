import { Route, Routes } from "react-router-dom";
import { TodoContext, TodoProvider } from "./context/TodoContext";
import UserProvider from "./context/UserProvider";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import todoStore from "./stores/todoStore";

const errorPage = ()=>{
  return(
    <h1>404 error</h1>
  ) 
}

const store = new todoStore();

function App() {

  return (
    <UserProvider>
      <TodoProvider value={store}>
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
