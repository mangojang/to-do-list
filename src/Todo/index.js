import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../AppLayout";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

const Todo = ()=>{
    const navigate = useNavigate();
    const [token, setToken] = useState('');


    useEffect(()=>{
        const accessToken = localStorage.getItem('todo');
        if(accessToken){
            setToken(accessToken);
        }else{
            navigate('/signin', {replace: true});
        }
    },[])
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>To Do List</h1>
                <div className="box_top">
                    <TodoInput config={config}/>
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