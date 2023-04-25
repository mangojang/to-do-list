import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { Button, FormInputRow, Input } from "../../Styles";
import { useNavigate } from "react-router-dom";
import { backURL } from "../../config";

const SignIn =()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(token){
            navigate('/todo', {replace: true});
        }
    },[navigate])

    const onChangeEmail = useCallback((e)=>{
        let value = e.target.value;

        const emailRegex= /^\S+@\S+\.\S+$/;

        if(emailRegex.test(value)){
            setEmailError(false);
        }else{
            setEmailError(true);
        }

        setEmail(value);

    },[]);

    const onChangePassword = useCallback((e)=>{
        let value = e.target.value;

        if(value){
            if(value.trim().length >=8){
                setPasswordError(false);
            }else{
                setPasswordError(true);
            }
        }else{
            setPasswordError(true);
        }

        setPassword(value);

    },[]);
    
    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        const data = {
            email,
            password
        }

        try {
            const response = await axios.post(`${backURL}/auth/signin`, data);
            const token = response.data.access_token;
            localStorage.setItem("todo", token);
            navigate('/todo')
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        }

    },[email, password, navigate]);

    return (
        <AppLayout type={"form"}>
            <div className="inner">
                 <h1>로그인</h1>
                 <form onSubmit={onSubmit}>
                     <FormInputRow>
                         <label htmlFor="email">이메일</label>
                         <Input type={"text"} id="email" placeholder="이메일을 입력해주세요" data-testid="email-input" onChange={onChangeEmail}/>
                     </FormInputRow>
                     <FormInputRow>
                         <label htmlFor="password">비밀번호</label>
                         <Input type={"password"} id="password" placeholder="비밀번호를 입력해주세요" data-testid="password-input" onChange={onChangePassword}/>
                     </FormInputRow>
                     <div className="btns_box">
                         <Button type={"submit"} styletype="default" data-testid="signin-button" disabled={emailError || passwordError ? true : false}>로그인</Button>
                         <Link to={"/signup"}><Button type={"button"} styletype="white">회원가입</Button></Link>
                     </div>
                 </form>
             </div>
        </AppLayout>
    );
  }
  
export default SignIn;