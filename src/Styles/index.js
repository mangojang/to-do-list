import styled from "styled-components";
import icon_add from "../asset/images/more.png";
import icon_edit from "../asset/images/edit.png";
import icon_delete from "../asset/images/trash.png";
import icon_cancle from "../asset/images/cancel.png";
import icon_complete from "../asset/images/select.png";
import icon_check from "../asset/images/tick.png";

export const Input = styled.input`
    min-width: 300px;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 6px;
    box-sizing: border-box;
`;

export const CheckBox = styled.div`
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"]+label {
        span{
            display: inline-block;
            width: 28px;
            height: 28px;
            margin: 0 8px 0 0;
            vertical-align: middle;
            background-color: #fff;
            border: 2px solid black;
            cursor: pointer;
        }
    }
    input[type="checkbox"]:checked+label{
        span{
            background:#fff url(${icon_check}) no-repeat center/80%;
        }
    }
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


export const Icon = styled.button`
    display: block;
    width: 30px;
    height: 30px;
    border: none;
    font-size: 0;
    border-radius:0;
    cursor: pointer;
    ${(props)=>{
        switch (props.styletype){
            case "add":
                return`
                    background: #fff url(${icon_add}) no-repeat center/100%;
                `;
            case "delete":
                return`
                    background: #fff url(${icon_delete}) no-repeat center/100%;
                `;
            case "edit":
                return`
                    background: #fff url(${icon_edit}) no-repeat center/100%;
                `;
            case "cancle":
                return`
                    background: #fff url(${icon_cancle}) no-repeat center/70%;
                `;
            case "complete":
                return`
                    background: #fff url(${icon_complete}) no-repeat center/100%;
                `;
            default:
                return `
                    
                `;
            }
        
    }}
`;

export const Button = styled.button`
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
                padding: 8px 20px;
                background-color: white;
                border: 1px solid black;
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
                border: 1px solid black;
                color: black; 
            `;
        default:
            return `
                padding: 8px 20px;
                background-color: black;
                border: 1px solid black;
                color: white;
            `;
        }
    }}
`;