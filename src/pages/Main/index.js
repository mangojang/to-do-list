
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInState } from "../../atoms/userAtoms";
import { useRecoilValue} from 'recoil';

const Main =()=>{
    const navigate = useNavigate();
    const isLoggedIn = useRecoilValue(isLoggedInState);

    useEffect(()=>{
        if(isLoggedIn){
            navigate('/todo', {replace: true});
        }else{
            navigate('signin', {replace: true})
        }
    },[isLoggedIn])

}

export default Main;