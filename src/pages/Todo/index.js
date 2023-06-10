import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { useRecoilValue} from 'recoil';
import { isLoggedInState } from "../../atoms/userAtoms";
import { todoListState } from "../../atoms/todoAtoms";


const Todo = ()=>{
    const navigate = useNavigate();
    const loggedIn = useRecoilValue(isLoggedInState)
    const todo = useRecoilValue(todoListState);

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
                    {todo&&todo.map((v,i)=>(<TodoList data={v} key={i}/>))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;