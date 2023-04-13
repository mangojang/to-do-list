import { useState } from "react";
import { Button, CheckBox, Input } from "../Styles";
import { List } from "./style";

const TodoList =() =>{
    const [isEdit, setIsEdit] = useState(false);

    return (
        <List>
            <form>
                <div className="inner">
                    <label>
                        <CheckBox type="checkbox" />
                        {isEdit
                            ?<Input type={'text'} value='TODO 1' data-testid="modify-input" />
                            :<span>TODO 1</span>
                        }
                    </label>
                        {isEdit
                            ?<>
                                <Button styletype='small' data-testid="submit-button">제출</Button>
                                <Button styletype='small_white' data-testid="cancel-button">취소</Button>
                            </>
                            :<>
                                <Button styletype='small' data-testid="modify-button">수정</Button>
                                <Button styletype='small_white' data-testid="delete-button">삭제</Button>
                            </>
                        }
                </div>
            </form>
        </List>
    );
};

export default TodoList;