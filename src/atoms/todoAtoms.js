import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";
import { backURL } from "../config";

export const todoListState = atom({
    key: 'todoListState',
    default: selector({
        key: 'todoList/Default',
        get: () => fetchTodoo(),
    }),
})

const fetchTodoo = async()=>{
    try {
        const response = await axios.get(`${backURL}/todos`);
        return response.data
    } catch (error) {
        return {error}
    }
}


export const addTodoQuery = selectorFamily({
    key: 'addTodo',
    get: (data) => async ({get}) => {
        try {
            const response = await axios.post(`${backURL}/todos`, data);
            return response.data
        } catch (error) {
            return {error}
        }
    },
  });