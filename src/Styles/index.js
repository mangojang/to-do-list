import styled from "styled-components";

export const Input = styled.input`
    min-width: 300px;
    height: 30px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    padding: 0 6px;
`;

export const CheckBox = styled.input`
    width: 28px;
    height: 28px;
`;

export const FormInputRow = styled.div`
    margin-bottom: 16px;
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
    &:disabled{
        cursor: default;
        opacity: .4;
    }
    ${(props)=>{
        switch (props.styletype) {
        case "white":
            return `
                background-color: white;
                border: 1px solid #d9d9d9;
                color: black; 
            `;
        case "small":
            return `
                padding: 6px 16px;
                background-color: black;
                border: 1px solid black;
                color: white;
            `;
        case "small_white":
            return `
                padding: 6px 16px;
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