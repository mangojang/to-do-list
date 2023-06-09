import axios from "axios";
import { useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { backURL } from "../../config";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { UserContext } from "../../context/UserProvider";
import { TodoContext } from "../../context/TodoProvider";
  

const Todo = ()=>{
    const navigate = useNavigate();
    const {loggedIn} = useContext(UserContext);
    const {todo, loadTodo} = useContext(TodoContext)


    const getTodos = useCallback(async()=>{
        console.log('gettodo');
        try {
            const response = await axios.get(`${backURL}/todos`);
            loadTodo(response.data);
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        }
    },[])

    useEffect(()=>{
        if(loggedIn){
            getTodos()
        }else{
            navigate('/signin', {replace: true});
        }
    },[loggedIn, getTodos, navigate]);

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>TO DO LIST</h1>
                <div className="box_top">
                    <TodoInput/>
                </div>
                <div className="box_bottom">
                    {todo&&todo.map((v,i)=>(<TodoList data={v} key={i}/>))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;