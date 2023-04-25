import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { backURL } from "../../config";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
  

const Todo = ()=>{
    const navigate = useNavigate();
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
        const accessToken = localStorage.getItem('todo');

        axios.interceptors.request.use(function (config) {
            config.headers.Authorization = `Bearer ${accessToken}`
            return config
        }, function (error) {
            return Promise.reject(error)
        })

        if(accessToken){
            getTodos()
        }else{
            navigate('/signin', {replace: true});
        }
        
    },[getTodos, navigate])

    const actions = {
        add(data){
            setTodos((prev)=>{
             return [...prev, data]   
            })
        },
        delete(id){
            setTodos((prev)=>{
                return prev.filter((item) => item.id !== Number(id));
            });
        },
        update(data){
            setTodos((prev)=>{
                return prev.map((item) => item.id === data.id ? data : item)
            })
        }
    }

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>To Do List</h1>
                <div className="box_top">
                    <TodoInput actions={actions}/>
                </div>
                <div className="box_bottom">
                    {todos&&todos.map((v,i)=>(<TodoList data={v} key={i} actions={actions}/>))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;