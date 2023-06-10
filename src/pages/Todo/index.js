import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { useRecoilValue, useRecoilState} from 'recoil';
import { isLoggedInState } from "../../atoms/userAtoms";
import { todoListState } from "../../atoms/todoAtoms";
import axios from "axios";
import { backURL } from "../../config";


const Todo = ()=>{
    const navigate = useNavigate();
    const loggedIn = useRecoilValue(isLoggedInState)
    const [todo, setTodo] = useRecoilState(todoListState);



    const fetchTodo = async()=>{
        try {
            const response = await axios.get(`${backURL}/todos`);
            setTodo(response.data)
        } catch (error) {
            alert(`error:${error.message}`)
        }
    }

    useEffect(()=>{
        if(!loggedIn){
            navigate('/signin', {replace: true});
        }else{
            fetchTodo()
        }
    },[loggedIn]);

    if(!loggedIn){
        return ''
    }

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