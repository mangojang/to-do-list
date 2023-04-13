import { Button, Input } from "../Styles";
import { Conatainer, Row } from "./style";

const TodoInput = ()=>{
    return(
        <Conatainer>
            <form>
                <Row>
                    <Input type={'text'} id='todo' data-testid="new-todo-input" />
                    <Button type="submit" styletype="small" data-testid="new-todo-add-button">추가</Button>
                </Row>
            </form>
        </Conatainer>
    );
};

export default TodoInput;