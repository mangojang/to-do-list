import axios from "axios";
import { useCallback, useState } from "react";
import { backURL } from "../config";
import { Button, CheckBox, Input } from "../Styles";
import { List } from "./style";

const TodoList =({ data, actions}) =>{
    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(data.todo);
    const [isCompleted, setIsCompleted] = useState(data.isCompleted);

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

    const onClickUpdate = useCallback((e)=>{
        e.preventDefault();
        const id = Number(e.target.value);

        const accessToken = localStorage.getItem('todo');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        const data ={
            todo,
            isCompleted
        }

        axios.put(`${backURL}/todos/${id}`,data, config)
        .then(response=>{
            console.log('rep',response);
            actions.update(response.data);
            setIsEdit((prev=>!prev));
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[todo, isCompleted])

    const onCheckUpdate = useCallback((e)=>{
        const id = Number(e.target.id);

        const accessToken = localStorage.getItem('todo');

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        const data ={
            todo,
            isCompleted : !isCompleted
        }

        axios.put(`${backURL}/todos/${id}`,data, config)
        .then(response=>{
            actions.update(response.data);
            setIsCompleted((prev=>!prev));
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[todo, isCompleted])

    const onChangeInput = useCallback((e)=>{
        setTodo(e.target.value);
    },[])

    const onToggleEdit = useCallback((e)=>{
        e.preventDefault();
        setIsEdit((prev=>!prev));
    },[])

    return (
        <List>
            <form>
                <div className="inner">
                    <label>
                        <CheckBox type="checkbox" id={data.id} checked={isCompleted} onChange={onCheckUpdate}/>
                        {isEdit
                            ?<Input type={'text'} value={todo} data-testid="modify-input" onChange={onChangeInput} />
                            :<span>{data.todo}</span>
                        }
                    </label>
                        {isEdit
                            ?<>
                                <Button type="submit" styletype='small' data-testid="submit-button" value={data.id} onClick={onClickUpdate}>제출</Button>
                                <Button type="button" styletype='small_white' data-testid="cancel-button">취소</Button>
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