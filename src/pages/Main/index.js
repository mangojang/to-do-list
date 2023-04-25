
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main =()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(token){
            navigate('/todo', {replace: true});
        }else{
            navigate('signin', {replace: true})
        }
    },[navigate])

}

export default Main;