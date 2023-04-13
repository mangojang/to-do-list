import axios from "axios";
import { useCallback, useState } from "react";
import { backURL } from "../config";
import { Button, CheckBox, Input } from "../Styles";
import { List } from "./style";

const TodoList =({ data, actions}) =>{
    const [isEdit, setIsEdit] = useState(false);

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

    return (
        <List>
            <form>
                <div className="inner">
                    <label>
                        <CheckBox type="checkbox" checked={data.isCompleted} />
                        {isEdit
                            ?<Input type={'text'} value={data.todo} data-testid="modify-input" />
                            :<span>{data.todo}</span>
                        }
                    </label>
                        {isEdit
                            ?<>
                                <Button thpe="submit" styletype='small' data-testid="submit-button" value={data.id}>제출</Button>
                                <Button type="button" styletype='small_white' data-testid="cancel-button">취소</Button>
                            </>
                            :<>
                                <Button type="submit" styletype='small' data-testid="modify-button" value={data.id}>수정</Button>
                                <Button type="button" styletype='small_white' data-testid="delete-button" value={data.id} onClick={onClickDelete}>삭제</Button>
                            </>
                        }
                </div>
            </form>
        </List>
    );
};

export default TodoList;