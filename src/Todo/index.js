import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(!token){
            navigate('/signin', {replace: true});
        }
    },[])

    return(
        <>
            To do 페이지
        </>
    );
};

export default Todo;