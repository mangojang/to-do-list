import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../AppLayout";
import { backURL } from "../config";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

const Todo = ()=>{
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    

    useEffect(()=>{
        const accessToken = localStorage.getItem('todo');
        if(accessToken){

            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }

            axios.get(`${backURL}/todos`,config)
            .then(response=>{
                console.log('성공',response.data);
                setTodos(response.data);
                
            })
            .catch(error=>{
                console.log('에러', error);
                alert('잠시후 다시 시도해 주세요.')
            })

        }else{
            navigate('/signin', {replace: true});
        }
    },[])

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
    }

    return(
        <AppLayout type={"todo"}>
            <div className="inner">
                <h1>To Do List</h1>
                <div className="box_top">
                    <TodoInput actions={actions}/>
                </div>
                <div className="box_bottom">
                    {todos&&todos.map((v)=>(<TodoList data={v} actions={actions}/>))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Todo;