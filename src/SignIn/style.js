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

export const FormInputRow = styled.div`
    margin-bottom: 16px;
    input{
        min-width: 300px;
        height: 30px;
        border: 1px solid #d1d1d1;
        border-radius: 4px;
        padding: 0 6px;
    }
    label{
        display: inline-block;
        min-width: 100px;
        margin-right: 10px;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    ${(props)=>{
        switch (props.styletype) {
        case "white":
            return `
                background-color: white;
                border: 1px solid #d9d9d9;
                color: black; 
            `;
        default:
            return `
                background-color: black;
                border: 1px solid black;
                color: white;
            `;
        }
    }}
`;