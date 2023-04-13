import axios from "axios";
import { useCallback, useState } from "react";
import { backURL } from "../config";
import { Button, Input } from "../Styles";
import { Conatainer, Row } from "./style";

const TodoInput = (props)=>{
    const [todo, setTodo] = useState('');
    console.log('props',props);

    const onChangeTodo = useCallback((e)=>{
        setTodo(e.target.value);
    },[])
    
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        const data = {
            todo
        }
        

        axios.post(`${backURL}/todos`, data, props.config)
        .then(response=>{
            console.log('성공',response.data);
            //1. setTodo('');
            setTodo('');
            //2. 받은 값 state 추가  -> 상위 컴포넌트에서 함수 끌어다 쓰기
        })
        .catch(error=>{
            console.log('에러', error);
            alert('잠시후 다시 시도해 주세요.')
        })
    },[todo])

    return(
        <Conatainer>
            <form onSubmit={onSubmit}>
                <Row>
                    <Input type={'text'} id='todo' data-testid="new-todo-input" value={todo} onChange={onChangeTodo} />
                    <Button type="submit" styletype="small" data-testid="new-todo-add-button">추가</Button>
                </Row>
            </form>
        </Conatainer>
    );
};

export default TodoInput;