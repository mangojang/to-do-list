import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import { Button, FormInputRow, Input } from "../../Styles";
import { useNavigate } from "react-router-dom";
import { backURL } from "../../config";
import { UserContext } from "../../context/UserProvider";

const SignUp =()=>{
    const navigate = useNavigate();
    const {loggedIn} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(true);

    useEffect(()=>{
        if(loggedIn){
            navigate('/todo', {replace: true});
        }
    },[loggedIn, navigate]);

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


    const onSubmit = useCallback( async(e)=>{
        e.preventDefault();
        const data = {
            email,
            password
        }

        try {
            const response = await axios.post(`${backURL}/auth/signup`, data);
            // console.log(response);
            alert('회원가입이 완료되었습니다.');
            navigate('/signin', { replace: true });
        } catch (error) {
            console.log('에러', error);
            alert(error.response.data.message)
            setEmail('');
            setPassword('');
        }
        
    },[email, password, navigate]);
    

    return (
        <AppLayout type={"form"}>
            <div className="inner">
                <h1>회원가입</h1>
                <form onSubmit={onSubmit}>
                    <FormInputRow>
                        <label htmlFor="email">이메일</label>
                        <Input type={"text"} id="email" placeholder="이메일을 입력해주세요" data-testid="email-input" value={email} onChange={onChangeEmail}/>
                    </FormInputRow>
                    <FormInputRow>
                        <label htmlFor="password">비밀번호</label>
                        <Input type={"password"} id="password" placeholder="비밀번호를 입력해주세요" data-testid="password-input" value={password} onChange={onChangePassword}/>
                    </FormInputRow>
                    <div className="btns_box">
                        <Button type={"submit"} styletype="default" data-testid="signup-button" disabled={emailError || passwordError ? true : false}>회원가입</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default SignUp;