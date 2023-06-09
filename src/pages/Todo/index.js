import { useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { useRecoilValue} from 'recoil';
import { isLoggedInState } from "../../atoms/userAtoms";
import { fetchTodoQuery } from "../../atoms/todoAtoms";

const Todos = ()=>{
    const todo = useRecoilValue(fetchTodoQuery);

    if(todo.error){
        alert(`error : ${todo.error.message}`);
        return ;
    }

    return (
        <>
        {todo&&todo.map((v,i)=>(<TodoList data={v} key={i}/>))}
        </>
    )
}
  

const Todo = ()=>{
    const navigate = useNavigate();
    const loggedIn = useRecoilValue(isLoggedInState)

    useEffect(()=>{
        if(!loggedIn){
            navigate('/signin', {replace: true});
        }
    },[loggedIn]);

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>TO DO LIST</h1>
                <div className="box_top">
                    <TodoInput/>
                </div>
                <div className="box_bottom">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Todos/>
                    </Suspense>
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;