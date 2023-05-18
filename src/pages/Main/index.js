
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Main =()=>{
    const navigate = useNavigate();
    const user = useContext(UserContext);

    useEffect(()=>{
        user.user.loggedIn
        ? navigate('/todo', {replace: true}) 
        : navigate('signin', {replace: true})
    },[navigate, user])

}

export default observer(Main);