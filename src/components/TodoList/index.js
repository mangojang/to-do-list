import { useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from "../../actions/todos";
import { CheckBox, Icon, Input } from "../../Styles";
import { List, Text } from "./style";

const TodoList =({ data }) =>{
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(data.todo);
    const [checked, setChecked] = useState(false);

    const onClickDelete = useCallback(async(e)=>{
        dispatch(deleteTodo(data.id))
    },[data.id, dispatch]);

    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        const sendData = {
            id: data.id,
            todo,
            isCompleted: data.isCompleted
        }
        const cb = function(){
            setIsEdit((prev=>!prev));
        }
        
        dispatch(updateTodo(sendData, cb))
        
    },[data.id, todo, data.isCompleted, dispatch])

    const onCheckUpdate = useCallback(async(e)=>{
        const sendData = {
            id: data.id,
            todo,
            isCompleted: data.isCompleted
        }

        const cb = function(){
            setChecked((prev)=>(!prev));
        }
        
        dispatch(updateTodo(sendData, cb))
        
    },[data.id, todo, data.isCompleted, dispatch])

    const onChangeInput = useCallback((e)=>{
        setTodo(e.target.value);
    },[])

    const onToggleEdit = useCallback((e)=>{
        e.preventDefault();
        setTodo(data.todo);
        setIsEdit((prev=>!prev));
    },[data.todo])

    const onClickCancle = useCallback((e)=>{
        e.preventDefault();
        setIsEdit((prev=>!prev));
        setTodo(data.todo);
    },[data.todo])

    return (
        <List>
            <form id={data.id} onSubmit={onSubmit}>
                <div className="inner">
                    <CheckBox>
                        <input type="checkbox" id={"check_"+data.id} checked={checked} onChange={onCheckUpdate}/>
                        <label htmlFor={"check_"+data.id}><span></span></label>
                    </CheckBox>
                    {isEdit
                        ?<Input type={'text'} value={todo} data-testid="modify-input" onChange={onChangeInput} />
                        :<Text className={checked&&'done'}>{data.todo}</Text>
                    }
                    {isEdit
                        ?<>
                            <Icon type="submit" title="제출" styletype='complete' data-testid="submit-button">제출</Icon>
                            <Icon type="button" title="취소" styletype='cancle' data-testid="cancel-button" onClick={onClickCancle}>취소</Icon>
                        </>
                        :<>
                            <Icon type="button" title="수정" styletype='edit' data-testid="modify-button" onClick={onToggleEdit} style={{visibility:checked?'hidden':'visible'}}>수정</Icon>
                            <Icon type="button" title="삭제" styletype='delete' data-testid="delete-button" value={data.id} onClick={onClickDelete}>삭제</Icon>
                        </>
                    }
                </div>
            </form>
        </List>
    );
};

export default TodoList;