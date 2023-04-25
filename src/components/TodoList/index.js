import axios from "axios";
import { useCallback, useState } from "react";
import { backURL } from "../../config";
import { Button, CheckBox, Input } from "../../Styles";
import { List } from "./style";

const TodoList =({ data, actions}) =>{
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(data.todo);

    const onClickDelete = useCallback(async(e)=>{
        const id = Number(e.target.value);
        try {
            const response = await axios.delete(`${backURL}/todos/${id}`);
            actions.delete(id);    
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        }
       
    },[actions]);

    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        const id = Number(e.target.id);

        const sendData ={
            todo,
            isCompleted : data.isCompleted
        }
        try {
            const response = await axios.put(`${backURL}/todos/${id}`,sendData);
            actions.update(response.data);
            setIsEdit((prev=>!prev));
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        }
        
    },[todo, data.isCompleted, actions])

    const onCheckUpdate = useCallback(async(e)=>{
        const id = Number(e.target.id);

        const sendData ={
            todo,
            isCompleted : !data.isCompleted
        }

        try {
            const response = await axios.put(`${backURL}/todos/${id}`,sendData);
            actions.update(response.data);
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        }

    },[todo, data.isCompleted, actions])

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
                    <label>
                        <CheckBox type="checkbox" id={data.id} checked={data.isCompleted} onChange={onCheckUpdate}/>
                        {isEdit
                            ?<Input type={'text'} value={todo} data-testid="modify-input" onChange={onChangeInput} />
                            :<span>{data.todo}</span>
                        }
                    </label>
                        {isEdit
                            ?<>
                                <Button type="submit" styletype='small' data-testid="submit-button">제출</Button>
                                <Button type="button" styletype='small_white' data-testid="cancel-button" onClick={onClickCancle}>취소</Button>
                            </>
                            :<>
                                <Button type="button" styletype='small' data-testid="modify-button" onClick={onToggleEdit}>수정</Button>
                                <Button type="button" styletype='small_white' data-testid="delete-button" value={data.id} onClick={onClickDelete}>삭제</Button>
                            </>
                        }
                </div>
            </form>
        </List>
    );
};

export default TodoList;