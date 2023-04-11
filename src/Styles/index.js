import styled from "styled-components";

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