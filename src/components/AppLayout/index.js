import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { FormBox, Layout, TodoBox } from "./style";

const AppLayout = ({type, children})=>{
    const {setLoggedIn} = useContext(UserContext);
    
    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(token){
            setLoggedIn(true);
            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = `Bearer ${token}`
                return config
            }, function (error) {
                return Promise.reject(error)
            })
        }
    },[setLoggedIn])
    
    return(
        <Layout>
            {type==='form'
            ?<FormBox>
                {children}
                <span className="sign">made by <a href="mailto:mangojang@gmail.com">mangojang</a></span>
            </FormBox>
            :<TodoBox>
                {children}
                <span className="sign">made by <a href="mailto:mangojang@gmail.com">mangojang</a></span>
            </TodoBox>
            }
      </Layout>
    );
};

export default AppLayout;