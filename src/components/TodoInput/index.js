import { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../../actions/todos";
import { Icon, Input } from "../../Styles";
import { Conatainer, Row } from "./style";

const TodoInput = ()=>{
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    const onChangeTodo = useCallback((e)=>{
        setTodo(e.target.value);
    },[])

    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();
        const sendData = {
            todo
        }

        const cb = function(){
            setTodo('');
        }
        
        dispatch(addTodo(sendData, cb))
       
    },[todo, dispatch])
    
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

export default TodoInput;