import axios from "axios";
import { useCallback, useState } from "react";
import { backURL } from "../config";
import { Button, CheckBox, Input } from "../Styles";
import { List } from "./style";

const TodoList =({ data, actions}) =>{
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(data.todo);

    const onClickDelete = useCallback((e)=>{
        const id = Number(e.target.value);

        const accessToken = localStorage.getItem('todo');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        axios.delete(`${backURL}/todos/${id}`,config)
        .then(response=>{
            actions.delete(id);
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[]);

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        const id = Number(e.target.id);

        const accessToken = localStorage.getItem('todo');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        const sendData ={
            todo,
            isCompleted : data.isCompleted
        }

        axios.put(`${backURL}/todos/${id}`,sendData, config)
        .then(response=>{
            actions.update(response.data);
            setIsEdit((prev=>!prev));
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[todo, data.isCompleted])

    const onCheckUpdate = useCallback((e)=>{
        const id = Number(e.target.id);

        const accessToken = localStorage.getItem('todo');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        const sendData ={
            todo,
            isCompleted : !data.isCompleted
        }

        axios.put(`${backURL}/todos/${id}`,sendData, config)
        .then(response=>{
            actions.update(response.data);
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[todo, data.isCompleted])

    const onChangeInput = useCallback((e)=>{
        setTodo(e.target.value);
    },[])

    const onToggleEdit = useCallback((e)=>{
        e.preventDefault();
        setIsEdit((prev=>!prev));
    },[])

    const onClickCancle = useCallback((e)=>{
        e.preventDefault();
        setIsEdit((prev=>!prev));
        setTodo(data.todo);
    },[])

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