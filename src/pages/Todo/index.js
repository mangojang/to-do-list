import axios from "axios";
import { useCallback, useEffect, useState, createContext, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { backURL } from "../../config";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import { UserContext } from "../../context/UserProvider";
  
export const TodoContext = createContext({
    todos:[],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
});


const Todo = ()=>{
    const navigate = useNavigate();
    const {loggedIn} = useContext(UserContext);

    const [todos, setTodos] = useState([]);

    const getTodos = useCallback(async()=>{
        try {
            const response = await axios.get(`${backURL}/todos`);
            setTodos(response.data); 
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


    const value = useMemo(()=>({
        addTodo(data){
            setTodos((prev)=>{
             return [...prev, data]   
            })
        },
        deleteTodo(id){
            setTodos((prev)=>{
                return prev.filter((item) => item.id !== Number(id));
            });
        },
        updateTodo(data){
            setTodos((prev)=>{
                return prev.map((item) => item.id === data.id ? data : item)
            })
        }
    }),[setTodos])

    return(
        <AppLayout type={"todo"}>
            <TodoContext.Provider value={value}>
                <div className="inner">
                    <h1>TO DO LIST</h1>
                    <div className="box_top">
                        <TodoInput/>
                    </div>
                    <div className="box_bottom">
                        {todos&&todos.map((v,i)=>(<TodoList data={v} key={i}/>))}
                    </div>
                </div>
            </TodoContext.Provider>
        </AppLayout>
    );
};

export default Todo;