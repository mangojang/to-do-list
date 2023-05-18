import axios from "axios";
import { observer } from "mobx-react";
import { useCallback, useContext, useState } from "react";
import { backURL } from "../../config";
import { TodoContext } from "../../context/TodoContext";
import { Icon, Input } from "../../Styles";
import { Conatainer, Row } from "./style";

const TodoInput = ()=>{
    const todos = useContext(TodoContext)
    const [todo, setTodo] = useState('');

    const onChangeTodo = useCallback((e)=>{
        setTodo(e.target.value);
    },[])

    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        try {
            const data = {
                todo
            }
            const response = await axios.post(`${backURL}/todos`, data);
            todos.addTodo(response.data);
            setTodo('');
            
        } catch (error) {
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
            setTodo('');
        }
    },[todo, todos])
    
    return(
        <Conatainer>
            <form onSubmit={onSubmit}>
                <Row>
                    <Input type={'text'} id='todo' data-testid="new-todo-input" value={todo} onChange={onChangeTodo} />
                    <Icon type="submit" title="추가" styletype="add" data-testid="new-todo-add-button">추가</Icon>
                </Row>
            </form>
        </Conatainer>
    );
};

export default observer(TodoInput);