import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const FormBox = styled.div`
   padding:  30px 60px;
   border-radius: 40px;
   border: 1px solid #d9d9d9;
   h1{
    font-size: 60px;
    line-height: 1.2;
    text-align: center;
    margin:30px 0 60px;

   }
   .btns_box{
        margin: 40px 0;
        text-align: center;
        button{
            margin-right: 16px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
`;

export const TodoBox = styled.div`
     padding:  30px 60px;
    border-radius: 40px;
    border: 1px solid #d9d9d9;
    h1{
        font-size: 60px;
        line-height: 1.2;
        text-align: center;
        margin:30px 0;

    }
    .box_top{
        padding: 16px 20px;
        border-radius: 16px;
        border: 1px solid #d9d9d9;
        margin-bottom: 10px;
    }
    .box_bottom{
    }
`;