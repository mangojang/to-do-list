import axios from "axios";
import { backURL } from "../config";

export const getTodos = () => async(dispatch, getState) => {
    const response = await axios.get(`${backURL}/todos`);
    dispatch({type:"FETCH_TODO", data: response.data})
}

export const addTodo = (data, cb) => async(dispatch, getState) => {
    try {
        const response = await axios.post(`${backURL}/todos`, data);
        dispatch({type:"ADD_TODO", data: response.data})
    } catch (error) {
        console.log('에러', error);
        alert('잠시후 다시 시도해 주세요.')
    } finally{
        cb();
    }
}

export const deleteTodo = (id) => async(dispatch, getState) => {
    try {
        const response = await axios.delete(`${backURL}/todos/${id}`);
        dispatch({type:"DELETE_TODO", data: {id}})
    } catch (error) {
        console.log('에러', error);
        alert(error.response.data.message || '잠시후 다시 시도해 주세요.')
    }
}

export const updateTodo = (data, cb) => async(dispatch, getState) => {
    try {
        const response = await axios.put(`${backURL}/todos/${data.id}`,data);
        dispatch({type:"UPDATE_TODO", data: response.data})
        cb();
    } catch (error) {
        console.log('에러', error);
        alert(error.response.data.message || '잠시후 다시 시도해 주세요.')
    }
}