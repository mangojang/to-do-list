
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Main =()=>{
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state)=> state.user);

    useEffect(()=>{
        loggedIn
        ? navigate('/todo', {replace: true}) 
        : navigate('signin', {replace: true})
    },[navigate, loggedIn])

}

export default Main;