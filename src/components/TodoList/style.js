import styled from "styled-components";

export const List = styled.li`
    list-style: none;
    padding: 10px 0;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    &:last-child{
        margin-bottom: 0;
    }
    .inner{
        display: flex;
        align-items: center;
        button{
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
`;

export const Text = styled.span`
    width: 300px;
    word-break: keep-all;
    position: relative;
    text-decoration: line-through;
`;