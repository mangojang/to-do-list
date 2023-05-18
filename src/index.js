import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { UserProvider } from "./context/UserContext";
import todoStore from "./stores/todoStore";
import userStore from "./stores/userStore";

const todostore = new todoStore();
const userstore = new userStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider value={userstore}>
        <TodoProvider value={todostore}>
          <App />
        </TodoProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
