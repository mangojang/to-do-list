import { FormBox, Layout, TodoBox } from "./style";
import { useSetRecoilState} from 'recoil';
import { isLoggedInState } from "../../atoms/userAtoms";
import { useEffect } from "react";
import axios from "axios";

const AppLayout = ({type, children})=>{
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  
    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(token){
            setIsLoggedIn(true);
        }
    },[])
    
    const token = localStorage.getItem('todo');
      if(token){
          axios.interceptors.request.use(function (config) {
              config.headers.Authorization = `Bearer ${token}`
              return config
          }, function (error) {
              return Promise.reject(error)
          })
      }

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