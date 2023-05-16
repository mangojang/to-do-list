import axios from "axios"
import { backURL } from "../config"

export const getUser = (token) => async(dispatch, getState) => {
    dispatch({type:"GET_USER"})
}

export const signUp = (data, cb) => async(dispatch, getState) => {
    try {
        const response = await axios.post(`${backURL}/auth/signup`, data);
        dispatch({type:"SIGN_UP"})
        cb.successed();

    } catch (error) {
        console.log('에러', error);
        alert(error.response.data.message)
        cb.failed();
    }
}

export const signIn = (data, cb) => async(dispatch, getState) => {
    try {
        const response = await axios.post(`${backURL}/auth/signin`, data);
        const token = response.data.access_token;
        localStorage.setItem("todo", token);
        dispatch({type:"SIGN_IN"})
        cb.successed();

    } catch (error) {
        console.log('에러', error);
        alert(error.response.data.message)
    }
}