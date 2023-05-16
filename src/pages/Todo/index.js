import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { getTodos } from "../../actions/todos";
  

const Todo = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state)=> state.user);
    const todos = useSelector((state)=>state.todos);

    useEffect(()=>{
        if(loggedIn){
            dispatch(getTodos())
        }else{
            navigate('/signin', {replace: true});
        }
    },[loggedIn, dispatch, navigate]);

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>TO DO LIST</h1>
                <div className="box_top">
                    <TodoInput/>
                </div>
                <div className="box_bottom">
                    {todos&&todos.map((v,i)=>(<TodoList data={v} key={i}/>))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;