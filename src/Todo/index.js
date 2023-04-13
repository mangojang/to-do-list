import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../AppLayout";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

const Todo = ()=>{
    const navigate = useNavigate();


    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(!token){
            navigate('/signin', {replace: true});
        }
    },[])

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>To Do List</h1>
                <div className="box_top">
                    <TodoInput/>
                </div>
                <div className="box_bottom">
                    <TodoList/>
                    <TodoList/>
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;