import { createContext, useMemo, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) =>{
    const [todo, setTodo] = useState({
        todo:[]
    });

    const value = useMemo(()=>{
        function loadTodo (data){
            setTodo((prev)=>{
                return {...prev, todo: [...data] }  
            })
        }
        function addTodo (data){
            setTodo((prev)=>{
               let newTodo = prev.todo 
               newTodo.push(data)
                return {...prev, todo: [...newTodo] }  
            })
        }

        function deleteTodo(id){
            setTodo((prev)=>{
                return { ...prev, todo: [...prev.todo.filter((item) => item.id !== Number(id))]}
            });
        }

        function updateTodo(data){
            setTodo((prev)=>{
                return { ...prev, todo:[...prev.todo.map((item) => item.id === data.id ? data : item)]}
            })
        }

        console.log('todocontext', {...todo, addTodo, deleteTodo, updateTodo})

        return { ...todo, loadTodo, addTodo, deleteTodo, updateTodo}

    },[todo])

    return(
        <TodoContext.Provider value={value} {...props}/>
    )
}

export default TodoProvider;