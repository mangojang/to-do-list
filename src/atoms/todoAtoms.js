import axios from "axios";
import { atom, selector } from "recoil";
import { backURL } from "../config";

export const todoListState = atom({
    key: 'todoListState',
    default: []
})


export const fetchTodoQuery = selector({
    key: 'fetchTodo',
    get: async ({get}) => {
        try {
            const response = await axios.get(`${backURL}/todos`);
            return response.data
        } catch (error) {
            return {error}
        }
    },
  });