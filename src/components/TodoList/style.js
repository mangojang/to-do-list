import styled from "styled-components";

export const List = styled.li`
    list-style: none;
    padding: 10px 0;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 10px;
    &:last-child{
        margin-bottom: 0;
    }
    .inner{
        display: flex;
        align-items: center;
        >label{
            display: flex;
            align-items: center;
            margin-right: 10px;
            input[type="checkbox"]{
                margin-right: 8px;
            }
            span{
                width: 300px;
                word-break: keep-all;
            }
        }
        button{
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
`;