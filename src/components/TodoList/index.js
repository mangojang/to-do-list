import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { backURL } from "../../config";
import { TodoContext } from "../../pages/Todo";
import { CheckBox, Icon, Input } from "../../Styles";
import { List, Text } from "./style";

const TodoList =({ data }) =>{
    const { deleteTodo, updateTodo } = useContext(TodoContext);
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(data.todo);
    const [checked, setChecked] = useState(data.isCompleted);

    const onClickDelete = useCallback(async(e)=>{
        const id = Number(e.target.value);
        try {
            const response = await axios.delete(`${backURL}/todos/${id}`);
            deleteTodo(id);
        } catch (error) {
            console.log('에러', error);
            alert(error.response.data.message || '잠시후 다시 시도해 주세요.')
        }
       
    },[deleteTodo]);

    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        const id = Number(e.target.id);

        const sendData ={
            todo,
            isCompleted : data.isCompleted
        }
        try {
            const response = await axios.put(`${backURL}/todos/${id}`,sendData);
            updateTodo(response.data);
            setIsEdit((prev=>!prev));
        } catch (error) {
            console.log('에러', error);
            alert(error.response.data.message || '잠시후 다시 시도해 주세요.')
        }
        
    },[todo, data.isCompleted, updateTodo])

    const onCheckUpdate = useCallback(async(e)=>{
        console.log('@@')
        const id = Number(e.target.id);

        const sendData ={
            todo: data.todo,
            // todo,
            isCompleted : !data.isCompleted
        }

        try {
            console.log('check1',sendData);
            const response = await axios.put(`${backURL}/todos/${id}`,sendData);
            console.log('check2',response);
            updateTodo(response.data);
            setChecked((prev)=>(!prev));
        } catch (error) {
            console.log('에러', error);
            alert(error.response.data.message || '잠시후 다시 시도해 주세요.')
        }

    },[data.todo, data.isCompleted, updateTodo])

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
            <form onSubmit={onSubmit}>
                <div className="inner">
                    <CheckBox>
                        <input type="checkbox" id={data.id} checked={checked} onChange={onCheckUpdate}/>
                        <label htmlFor={data.id}><span></span></label>
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