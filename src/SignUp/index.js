import FormLayout from "../FormLayout";
import { Button, FormInputRow } from "../Styles";

const SignUp =()=>{
    return (
        <FormLayout>
            <div className="inner">
                <h1>회원가입</h1>
                <form>
                    <FormInputRow>
                        <label htmlFor="email">이메일</label>
                        <input type={"text"} id="email" placeholder="이메일을 입력해주세요" data-testid="email-input"/>
                    </FormInputRow>
                    <FormInputRow>
                        <label htmlFor="password">비밀번호</label>
                        <input type={"password"} id="password" placeholder="비밀번호를 입력해주세요" data-testid="password-input"/>
                    </FormInputRow>
                    <div className="btns_box">
                        <Button type={"button"} styletype="default" data-testid="signup-button">회원가입</Button>
                    </div>
                </form>
            </div>
        </FormLayout>
    );
};

export default SignUp;