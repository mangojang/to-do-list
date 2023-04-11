import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import FormLayout from "../FormLayout";
import { Button, FormInputRow } from "../Styles";
import { useNavigate } from "react-router-dom";

// const backURL = "https://www.pre-onboarding-selection-task.shop";
const backURL = "http://localhost:8000";

const SignUp =()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('todo');
        if(token){
            navigate('/todo');
        }
    },[])

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


    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        const data = {
            email,
            password
        }

        axios.post(`${backURL}/auth/signup`, data)
        .then(response=>{
            alert('회원가입이 완료되었습니다.');
            navigate('/signin', { replace: true });
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })

        
    },[email, password]);
    

    return (
        <FormLayout>
            <div className="inner">
                <h1>회원가입</h1>
                <form>
                    <FormInputRow>
                        <label htmlFor="email">이메일</label>
                        <input type={"text"} id="email" placeholder="이메일을 입력해주세요" data-testid="email-input" onChange={onChangeEmail}/>
                    </FormInputRow>
                    <FormInputRow>
                        <label htmlFor="password">비밀번호</label>
                        <input type={"password"} id="password" placeholder="비밀번호를 입력해주세요" data-testid="password-input" onChange={onChangePassword}/>
                    </FormInputRow>
                    <div className="btns_box">
                        <Button type={"button"} styletype="default" data-testid="signup-button" onClick={onSubmit} disabled={emailError || passwordError ? true : false}>회원가입</Button>
                    </div>
                </form>
            </div>
        </FormLayout>
    );
};

export default SignUp;